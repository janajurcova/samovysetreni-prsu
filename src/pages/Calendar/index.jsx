import React from 'react';
import './style.css';
import dayjs from 'dayjs';
import dayjscs from 'dayjs/locale/cs';
import { useState } from 'react';
import dayjsRecur from 'dayjs-recur';
dayjs.extend(dayjsRecur)
dayjs.locale('cs')


/**
 * Naplánuje zobrazení notifikace.
 * 
 * @param {string} title Titulek notifikace.
 * @param {string} body Tělo (text) notifikace.
 * @param {string} tag  Štítek (kategorie) notifikace – interní pro aplikaci.
 * @param {dayjs} datetime Datum a čas (dayjs), kdy notifikaci zobrazit.
 * @returns 
 */
const setNotification = (title, body, tag, datetime) => {
    const registerNotification = () => {
        navigator.serviceWorker.getRegistration().then(registration => {
            registration.showNotification(title, {
                tag: tag,
                body: body,
                requireInteraction: true,
                icon: "/img/Icons-cancer.jpg",
                showTrigger: new TimestampTrigger(datetime.valueOf()),
            })
        });
    }
    if (!('showTrigger' in Notification.prototype)) {
        console.error("Notifikace nejsou podporovány.")
        return
    }
    if (window.Notification && Notification.permission !== 'granted') {
        Notification.requestPermission(status => {
            if (status === 'granted') {
                console.log('Notifications allowed.')
                registerNotification()
            }
        })
    } else {
        registerNotification()
    }
}

/**
 * Zruší všechny naplánované notifikace s daným štítkem.
 * @param {string} tag Štítek (kategorie) notifikace – interní pro aplikaci.
 */
const cleanNotifications = (tag) => {
    navigator.serviceWorker.getRegistration().then(registration => {
        registration.getNotifications({
            tag: tag,
            includeTriggered: true
        }).then(notifications => notifications.forEach((notification) => notification.close()))
    });
}

const Day = ({ day, month, recurrenceYear, recurrenceMonth }) => {
    const sameMonth = day.isSame(month, "month")
    const currentDay = day.isSame(dayjs(), "date")
    let className = " "
    if (!sameMonth) {
        className += "other-month "
    }
    if (currentDay) {
        className += "current-day "
    }
    if (recurrenceMonth !== null && recurrenceMonth.matches(day)) {
        className += "month-noticeDay "
    }
    if (recurrenceYear !== null && recurrenceYear.matches(day)) {
        className += "year-noticeDay "
    }

    return (<td className={className}>{day.date()}</td>)
}


const Week = ({ firstday, month, recurrenceMonth, recurrenceYear }) => {
    return (
        <tr>
            {
                (new Array(7)).fill(null).map((_, index) => <Day day={firstday.add(index, "day")} recurrenceYear={recurrenceYear} recurrenceMonth={recurrenceMonth} month={month} key={index} />)
            }
        </tr>
    )
};


/*-----------formulář zadání dat pro Samovyšetření----- */
const FormMonth = ({ onChange }) => {
    const [start, setStart] = useState("");
    const [cycle, setCycle] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        onChange({ start, cycle });
        // alert('Nastavení vašeho samovyšetření (.)(.) bylo uloženo 🥳.');
    };
    function myFunction() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        console.log("funguju");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4 className="form-title">Nastavení samovyšetření:</h4>
            <label className="field">
                První vyšetření:
                <input
                    type="date"
                    value={start}
                    onChange={(event) => {
                        const on = event.target.value;
                        setStart(on);
                    }}
                /> </label>
            <label className="field">Opakování po:
                <input
                    type="number"
                    value={cycle}
                    min={10}
                    onChange={(event) => {
                        const on = event.target.value;
                        setCycle(on);
                    }}
                />dnech</label>
            <p>Nastav si své první vyšetření na 5-10 den menstruačního cyklu a periodu opakování nastav podle jeho délky.</p>
            <button onClick={myFunction} className="btn-notice" type="submit" disabled={start === "" || cycle === ""}>Nastavit upozornění</button>
            <div id="snackbar">Nastavení vašeho samovyšetření (.)(.) bylo uloženo 🥳.</div>
        </form>
    )
};

/*-----------formulář zadání dat pro Diagnostické vyšetření----- */
const FormYear = ({ onChange }) => {
    const [start, setStart] = useState("");
    const [cycle, setCycle] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        onChange({ start, cycle });
        alert('Nastavení vašeho diagnostického vyšetření (.)(.) bylo uloženo 🥳.');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4 className="form-title">Nastavení diagnostického vyšetření:</h4>
            <label className="field">První vyšetření:
                <input
                    type="date"
                    value={start}
                    onChange={(event) => {
                        const on = event.target.value;
                        setStart(on);
                    }}
                /> </label>
            <label className="field">Opakování po:
                <input
                    type="number"
                    value={cycle}
                    min={6}
                    onChange={(event) => {
                        const on = event.target.value;
                        setCycle(on);
                    }}
                />měsících</label>
            <button className="btn-notice" type="submit" disabled={start === "" || cycle === ""}>Nastavit upozornění</button>
        </form>
    )
}


/*-------nastavení opakévání vyšetření------ */
const generateMonthRecurrent = (dateMonth) => dayjs(dateMonth.start).recur().every(dateMonth.cycle, "days")
const generateYearRecurrent = (dateYear) => dayjs(dateYear.start).recur().every(dateYear.cycle, "months")


/*----------Kalendář---------- */

export const Calendar = () => {
    const [month, setMonth] = useState(() => dayjs().startOf("month"))
    const firstMonday = month.startOf("week")


/*-----uložení dat samovyšetření do LocalStorage----- */
    const [dateMonth, setDateMonth] = useState(() => {
        const data = localStorage.getItem("samovysetreni")
        if (data === null) {
            return null
        }
        else {
            return JSON.parse(data)
        }
    })

/*-----uložení dat diagnostického vyšetření do LocalStorage----- */
    const [dateYear, setDateYear] = useState(() => {
        const data = localStorage.getItem("diagnostickeVysetreni")
        if (data === null) {
            return null
        }
        else {
            return JSON.parse(data)
        }
    })


    const recurrenceMonth = dateMonth === null ? null : generateMonthRecurrent(dateMonth);
    const recurrenceYear = dateYear === null ? null : generateYearRecurrent(dateYear);


    /*----nastavení času a znění Notifikace na samovyšetření--- */
    const handleChangeMonth = (data) => {
        setDateMonth(data)
        cleanNotifications("samovysetreni")
        // setNotification("Samovyšetření prsu", "Je čas se vyšeřit: \"Touch me if you can\"", "samovysetreni", dayjs().add(5, "second"))
        
        generateMonthRecurrent(data)
            .next(12)
            .forEach(dateTime =>
                setNotification("Samovyšetření prsu", "Je čas se vyšeřit: \"Touch me if you can\"", "samovysetreni", dateTime.hour(9))
            )
        localStorage.setItem("samovysetreni", JSON.stringify(data))
    }

    /*----nastavení času a znění Notifikace na samovyšetření--- */
    const handleChangeYear = (data) => {
        setDateYear(data)
        cleanNotifications("diagnostickeVysetreni")
        generateYearRecurrent(data).next(4).forEach(monthTime => setNotification("Objednej se na ultrzvuk/mamograf", "Je čas se vyšeřit: \"Touch me if you can\"", "diagnostickeVysetreni", monthTime.hour(9)))
        localStorage.setItem("diagnostickeVysetreni", JSON.stringify(data))
    }
    const changeMonth = (delta) => {
        setMonth(month.add(delta, "month"))
    }

    return (
        <main style={{ paddingTop: '1rem' }}>
        <div className="calendar-container">
            <div className="calendar-container__body">
                <h1>Kalendář {month.format("YYYY")}</h1>
                <div className="calendar">
                    <header className="calendar-header">

                        <button className="calendar-prev" onClick={() => changeMonth(-1)}><i className="las la-angle-left"></i></button>
                        <h2>{month.format("MMMM")}</h2>
                        <button className="calendar-next" onClick={() => changeMonth(1)} ><i className="las la-angle-right"></i></button>
                    </header>
                    <table className="calendar-table">
                        <thead>
                            <tr>
                                <td>Po</td>
                                <td>Út</td>
                                <td>St</td>
                                <td>Čt</td>
                                <td>Pá</td>
                                <td>So</td>
                                <td>Ne</td>
                            </tr>
                        </thead>

                        <tbody>
                            {(new Array(5)).fill(null).map((_, index) => <Week firstday={firstMonday.add(index, "week")} month={month} recurrenceMonth={recurrenceMonth} recurrenceYear={recurrenceYear} key={index} />)}
                        </tbody>
                    </table>
                </div>
                    <div className="container-legend">
                    <h4 className="form-title__legend">Legenda:</h4>
                        <div>
                            <span className="container-legend__month"></span>Samovyšetření
                        </div>
                        <div>
                            <span className="container-legend__year"></span>Diagnostické vyšetření
                        </div>
                    </div>
                
                </div>
                <div>
               
                <div className="container-settings__month">
                    <FormMonth
                        onChange={handleChangeMonth}
                    />
                </div>
                <div className="container-settings__year">
                    <FormYear
                        onChange={handleChangeYear}
                    />
                </div>
                </div>
            </div>
        </main>
    );
};