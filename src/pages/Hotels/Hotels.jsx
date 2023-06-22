import "./hotels.css"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"

const Hotels = () => {
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="container">
                <div className="wrapper">
                    <div className="search">
                        <h1 className="searchTitle">Search</h1>
                        <div className="searchItem">
                            <label htmlFor="">Destination</label>
                            <input type="text" />
                        </div>
                        <div className="searchItem">
                            <label htmlFor="">Check-in Date</label>

                        </div>
                    </div>
                    <div className="results"></div>
                </div>
            </div>
        </div>
    )
}

export default Hotels