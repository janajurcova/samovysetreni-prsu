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
    const date = dayjs()
    const month = date.startOf("month")
    const firstMonday = month.startOf("week")
    const [dateMonth, setDateMonth] = useState(null)
    const [dateYear, setDateYear] = useState(null)

    const handleChangeMonth = (data) => {
        setDateMonth(data)
    }
    const handleChangeYear = (data) => {
        setDateYear(data)
        console.log(data)
    }

    const recurrenceMonth =  dateMonth === null ? null : dayjs(dateMonth.start).recur().every(dateMonth.cycle, "days");
    const recurrenceYear = dateYear === null ? null : dayjs(dateYear.start).recur().every(dateYear.cycle, "months");


    return (
        <main style={{ padding: '1rem' }}>
            <h1>Kalendář</h1>
            <div className="container1">
                <div className="calendar">
                    <header>
                        <h2>{date.format("MMMM")}</h2>
                        <a className="btn-prev fontawesome-angle-left" href="#"></a>
                        <a className="btn-next fontawesome-angle-right" href="#"></a>
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
                            {(new Array(5)).fill(null).map((_, index) => <Week firstday={firstMonday.add(index, "week")} recurrenceMonth={recurrenceMonth} recurrenceYear={recurrenceYear} key={index} />)}
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