import React from "react"
import { Link } from "react-router-dom"


const Teamleden = () => {
  return (
        <div className="cards container">
            <div className="row">
                <Link className="card col-4" style={{width: '18rem'}} to="/">
                    <img className="card-img-top" src={require("../images/wilrijk.jpg")} alt="foto"/>
                    <div className="card-body">
                    <h5 className="card-title">Teamleden Wilrijk</h5>
                    </div>
                </Link>
                <Link className="card col-4" style={{width: '18rem'}} to="/">
                    <img className="card-img-top" src={require("../images/team.jpg")} alt="foto"/>
                    <div className="card-body">
                        <h5 className="card-title">Gespecialiseerde subteams</h5>
                    </div>
                </Link>
                <Link className="card col-4" style={{width: '18rem'}} to="/">
                    <img className="card-img-top" src={require("../images/wachtzaal.jpg")} alt="foto"/>
                    <div className="card-body">
                    <h5 className="card-title">Praktijkruimte huren/vacatures</h5>
                    </div>
                </Link>
            </div>
        </div>
  )
}

export default Teamleden