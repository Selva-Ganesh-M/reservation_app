import "./hotelCard.css"

const HotelCard = () => {
    return (
        <div className="hcsearchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
                className="hcsiImg"
            />

            <div className="hcsiDesc">
                <h1 className="hcsiTitle">Tower Street Apartments</h1>
                <span className="hcsiDistance">500m from center</span>
                <span className="hcsiTaxiOp">Free airport taxi</span>
                <span className="hcsiSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="hcsiFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="hcsiCancelOp">Free cancellation </span>
                <span className="hcsiCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>

            <div className="hcsiDetails">
                <div className="hcsiRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="hcsiDetailTexts">
                    <span className="hcsiPrice">$112</span>
                    <span className="hcsiTaxOp">Includes taxes and fees</span>
                    <button className="hcsiCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default HotelCard