import "./hotels.css"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"

const Hotels = () => {
    // #region : grabbing
    const location = useLocation()

    // #endregion : grabbing

    // #region : togglers
    const [openDate, setOpenDate] = useState(false)

    // #endregion : togglers

    // #region : states
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date);
    const [pupilOptions, setPupilOptions] = useState(location.state.pupilOptions)

    // #endregion : states

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="container">
                <div className="wrapper">

                    {/* search box */}
                    <div className="search">
                        <h1 className="searchTitle">Search</h1>

                        {/* destination */}
                        <div className="searchItem">
                            <label htmlFor="">Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>

                        {/* date search */}
                        <div className="searchItem">
                            <label htmlFor="">Check-in Date</label>
                            <span
                                onClick={() => setOpenDate(prev => !prev)}
                                className="">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openDate && <DateRange
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />}
                        </div>

                        {/* pupil option */}
                        <div className="searchItem">
                            <label htmlFor="">Options</label>
                            <div className="searchPupilOptions">
                                <div className="searchOptionItem">
                                    <span className="searchOptionText">Min Price <small>per night</small></span>
                                    <input className="searchOptionInput" type="number" />
                                </div>
                                <div className="searchOptionItem">
                                    <span className="searchOptionText">Max Price <small>per night</small></span>
                                    <input className="searchOptionInput" type="number" />
                                </div>
                                <div className="searchOptionItem">
                                    <span className="searchOptionText">Adults</span>
                                    <input
                                        className="searchOptionInput"
                                        min={1}
                                        type="number" placeholder={location.state.pupilOptions.adults} />
                                </div>
                                <div className="searchOptionItem">
                                    <span className="searchOptionText">Children</span>
                                    <input min={0} className="searchOptionInput" type="number" placeholder={location.state.pupilOptions.children} />
                                </div>
                                <div className="searchOptionItem">
                                    <span className="searchOptionText">Rooms</span>
                                    <input min={1} className="searchOptionInput" type="number" placeholder={location.state.pupilOptions.rooms} />
                                </div>

                            </div>
                        </div>

                        <button>Search</button>
                    </div>


                    {/* results box */}
                    <div className="results"></div>
                </div>
            </div>
        </div>
    )
}

export default Hotels