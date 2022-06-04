import React from 'react';
import './style.css';
import dayjs from 'dayjs';
import dayjscs from 'dayjs/locale/cs';

dayjs.locale('cs')


const Day = ({ day, month }) => {
    const sameMonth = day.isSame(month, "month")
    const currentDay = day.isSame(dayjs(), "date")
    let className = ""
    if (!sameMonth) {
         className += "other-month " 
        }
        if (currentDay) {
            className += "current-day "
        }
    return (<td className={className}>{day.date()}</td>)
}


const Week = ({ firstday, month }) => {
    return (
        <tr>
            {
                (new Array(7)).fill(null).map((_, index) => <Day day={firstday.add(index, "day")} month={month} key={index} />)
            }
        </tr>
    )
};


export const Calendar = () => {
    const date = dayjs()
    const month = date.startOf("month")
    const firstMonday = month.startOf("week")

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
                            {(new Array(5)).fill(null).map((_, index) => <Week firstday={firstMonday.add(index, "week")} key={index} />)}
                        </tbody>
                    </table>

                </div>
                <div className="container2">
                    <h4>Legenda:</h4>
                </div>
                <div className="container2">
                    <h4>Nastavení samovyšetření:</h4>
                </div>
                <div className="container2">
                    <h4>Nastavení diagnostického vyšetření:</h4>
                </div>
            </div>

        </main>
    );
};