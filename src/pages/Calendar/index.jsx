import React from 'react';
import './style.css';

export const Calendar = () => {
    return (
        <main style={{ padding: '1rem' }}>
            <h1>Kalendář</h1>
            <div className="container1">
                <div className="calendar">

                    <header>
                        <h2>April</h2>
                        <a className="btn-prev fontawesome-angle-left" href="#"></a>
                        <a className="btn-next fontawesome-angle-right" href="#"></a>
                    </header>
                    <table>
                        <thead>
                            <tr>
                                <td>Po</td>
                                <td>Ut</td>
                                <td>St</td>
                                <td>Ct</td>
                                <td>Pa</td>
                                <td>So</td>
                                <td>Ne</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="prev-month">29</td>
                                <td className="prev-month">30</td>
                                <td className="prev-month">31</td>

                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td className="event">9</td>
                                <td className="current-day event">10</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>13</td>
                                <td>14</td>
                                <td>15</td>
                                <td>16</td>
                                <td>17</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>20</td>
                                <td>21</td>
                                <td className="event">22</td>
                                <td>23</td>
                                <td>24</td>
                                <td>25</td>
                            </tr>

                            <tr>
                                <td>26</td>
                                <td>27</td>
                                <td>28</td>
                                <td>29</td>
                                <td>30</td>
                                <td className="next-month">1</td>
                                <td className="next-month">2</td>
                            </tr>
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