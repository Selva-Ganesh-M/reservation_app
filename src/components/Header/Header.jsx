import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns"
// import { useEffect } from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

const Header = ({ type }) => {

    // #region : grabbing
    const navigate = useNavigate()

    // #endregion : grabbing

    // #region : states
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ])

    const [pupilOptions, setPupilOptions] = useState({
        adults: 1,
        children: 0,
        rooms: 1,
    })

    const [destination, setDestination] = useState("")
    // #endregion : states

    // #region : togglers
    const [openDate, setOpenDate] = useState(false);
    const [pupilToggler, setPupilToggler] = useState(false);

    // #endregion : togglers

    // #region : side effects

    // #region : togglers - side effects


    // #endregion : togglers - side effects

    // #endregion : side effects

    // #region : methods
    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, pupilOptions } })
    }

    // #endregion : methods

    return (
        <div className="header">

            <div className={type === "list" ? "headerContainer ListMode" : "headerContainer"}>

                {/* header list items */}
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" &&

                    // title, desc & search
                    <>

                        {/* title and description */}
                        <h1 className="headerTitle">A lifetime of discounts? It&apos;s Genius.</h1>
                        <p className="headerDesc">
                            Get rewarded for your travels – unlock instant savings of 10% or
                            more with a free Lamabooking account
                        </p>
                        <button className="headerBtn">Sign in / Register</button>

                        {/* search bar - container */}
                        <div className="headerSearch">

                            {/* search bar */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text" placeholder="Where are you goind?" className="headerSearchInput" onChange={(e) => setDestination(e.target.value)} />
                            </div>

                            {/* date picker */}
                            <div className="headerSearchItem">
                                <div
                                    onClick={() => {
                                        setOpenDate((prev) => !prev)
                                        pupilToggler && setPupilToggler(false)
                                    }}
                                    onBlur={() => setOpenDate(false)}
                                    style={{ display: "flex", gap: "10px" }}>
                                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                    <span className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                </div>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />}
                            </div>

                            {/* pupil and room info  */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span
                                    className="headerSearchText"
                                    onClick={() => {
                                        setPupilToggler(prev => !prev)
                                        openDate && setOpenDate(false)
                                    }}
                                >{
                                        `${pupilOptions.adults} adults · ${pupilOptions.children} children · ${pupilOptions.rooms} rooms`
                                    }</span>
                                {
                                    pupilToggler &&
                                    <div className="options">

                                        {/* adults */}
                                        <div className="optionItem">
                                            <span className="optionText">Adults</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={pupilOptions.adults <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => setPupilOptions(prev => {
                                                        if (prev.adults > 0) {
                                                            return { ...prev, adults: prev.adults - 1 }
                                                        }
                                                        return prev
                                                    })}
                                                >-</button>
                                                <span className="optionCounterNumber">{pupilOptions.adults}</span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => setPupilOptions(prev => {
                                                        return { ...prev, adults: prev.adults + 1 }
                                                    })}
                                                >+</button>

                                            </div>
                                        </div>

                                        {/* children */}
                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={pupilOptions.children <= 0}
                                                    className="optionCounterButton"
                                                    onClick={() => setPupilOptions(prev => {
                                                        if (prev.children > 0) {
                                                            return { ...prev, children: prev.children - 1 }
                                                        }
                                                        return prev
                                                    })}
                                                >-</button>
                                                <span className="optionCounterNumber">{pupilOptions.children}</span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => setPupilOptions(prev => {
                                                        return { ...prev, children: prev.children + 1 }
                                                    })}
                                                >+</button>

                                            </div>
                                        </div>

                                        {/* rooms */}
                                        <div className="optionItem">
                                            <span className="optionText">Rooms</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={pupilOptions.rooms <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => setPupilOptions(prev => {
                                                        if (prev.rooms > 0) {
                                                            return { ...prev, rooms: prev.rooms - 1 }
                                                        }
                                                        return prev
                                                    })}
                                                >-</button>
                                                <span className="optionCounterNumber">{pupilOptions.rooms}</span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => setPupilOptions(prev => {
                                                        return { ...prev, rooms: prev.rooms + 1 }
                                                    })}
                                                >+</button>

                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>

                }
            </div>
        </div>
    )
}

export default Header

Header.propTypes = {
    type: PropTypes.string
}