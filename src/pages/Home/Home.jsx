import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
            </div>
        </div>
    )
}

export default Home