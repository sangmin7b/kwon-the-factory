import React from "react"
import { Route } from "react-router-dom"
import ItemList from "./ItemList"
import ItemDetail from "./ItemDetail"
import Footer from "../Footer/Footer.js"
import "./Shop.css"

function Shop ({match}) {
    return (
        <div className="shopContent">
            <div className="body">
                <Route exact path={match.path} component={ItemList} />
                <Route path={`${match.path}/:name`} component={ItemDetail} />
            </div>
            <Footer/>
        </div>
    )

}


export default Shop
