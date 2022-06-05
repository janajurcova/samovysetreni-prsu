import React from 'react';
import './style.css';
import dayjs from 'dayjs';
import dayjscs from 'dayjs/locale/cs';
import { useState } from 'react';
import dayjsRecur from 'dayjs-recur'
dayjs.extend(dayjsRecur)
dayjs.locale('cs')


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


const FormMonth = ({ onChange }) => {
    const [start, setStart] = useState("");
    const [cycle, setCycle] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        onChange({ start, cycle })
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Nastavení samovyšetření:</h4>
            <label className="field">
                První vyšetření:
                <input
                    type="date"
                    value={start}
                    onChange={(event) => {
                        const on = event.target.value;
                        console.log(on)
                        setStart(on);
                    }}
                /> </label>
            <label className="field">Opakování po:
                <input
                    type="number"
                    value={cycle}
                    onChange={(event) => {
                        const on = event.target.value;
                        console.log(on)
                        setCycle(on);
                    }}
                /></label>
            <button className="btn-notice" type="submit" >Nastavit upozornění</button>
        </form>
    )
};

const FormYear = ({ onChange }) => {
    const [start, setStart] = useState("");
    const [cycle, setCycle] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        onChange({ start, cycle })
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Nastavení diagnostického vyšetření:</h4>
            <label className="field">První vyšetření:
                <input
                    type="date"
                    value={start}
                    onChange={(event) => {
                        const on = event.target.value;
                        console.log(on)
                        setStart(on);
                    }}
                /> </label>
            <label className="field">Opakování po:
                <input
                    type="number"
                    value={cycle}
                    onChange={(event) => {
                        const on = event.target.value;
                        console.log(on)
                        setCycle(on);
                    }}
                /></label>
            <button className="btn-notice" type="submit">Nastavit upozornění</button>
        </form>
    )
}


export const Calendar = () => {
    const [month, setMonth] = useState(() => dayjs().startOf("month"))
    const firstMonday = month.startOf("week")
    const [dateMonth, setDateMonth] = useState(() => {
        const data = localStorage.getItem("samovysetreni")
        if (data === null) {
            return null
        }
        else {
            return JSON.parse(data)
        }
    })
    
    const [dateYear, setDateYear] = useState(() => {
        const data = localStorage.getItem("diagnostickeVysetreni")
        if (data === null) {
            return null
        }
        else {
            return JSON.parse(data)
        }
    })

    const handleChangeMonth = (data) => {
        setDateMonth(data)
        localStorage.setItem("samovysetreni", JSON.stringify(data))
    }
    const handleChangeYear = (data) => {
        setDateYear(data)
        localStorage.setItem("diagnostickeVysetreni", JSON.stringify(data))
    }
    const changeMonth = (delta) => {
        setMonth(month.add(delta, "month"))
    }

    const recurrenceMonth = dateMonth === null ? null : dayjs(dateMonth.start).recur().every(dateMonth.cycle, "days");
    const recurrenceYear = dateYear === null ? null : dayjs(dateYear.start).recur().every(dateYear.cycle, "months");


    return (
        <main style={{ padding: '1rem' }}>
            <h1>Kalendář</h1>
            <div className="container1">
                <div className="calendar">
                    <header className="calendar-header">

                        <button className="las la-angle-left" onClick={() => changeMonth(-1)}></button>
                        <h2>{month.format("MMMM")}</h2>
                        <button className="las la-angle-right" onClick={() => changeMonth(1)} ></button>
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
                    <h4>Legenda:</h4>
                </div>
                <div className="container-settings">
                    <FormMonth
                        onChange={handleChangeMonth}
                    />
                </div>
                <div className="container-settings">
                    <FormYear
                        onChange={handleChangeYear}
                    />
                </div>
            </div>
        </main>
    );
};