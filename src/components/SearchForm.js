import React, { Component } from "react";


class SearchForm extends Component {
    state = {
        someKey: "someValue"
    }

    render() {
        return(
            <form class="form-inline second-time">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        );
    }
}

export default SearchForm;