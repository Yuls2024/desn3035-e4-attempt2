import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

export default function About() {
    return <>
        <div className="container py-4">
            <div className="row">

            <Header />

            <Nav />

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                    <h1>About us</h1>
                    <p>
                        About us... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi doloribus nihil nesciunt fuga quod animi cum ducimus placeat quas, incidunt, vero, aut non sit! Rerum temporibus commodi fugiat totam delectus!
                    </p>
                </div>

            </div>
        </div>
    </>
}