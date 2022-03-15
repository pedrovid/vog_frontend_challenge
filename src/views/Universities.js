import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux-thunk/Universities/actions";
import * as countryActions from "../redux-thunk/Countries/actions";
import {useEffect, useState} from "react";
import CustomNavbar from "../components/Navbar";
import {Dropdown, ListGroupItem} from "react-bootstrap";
import UniversityCard from "../components/UniversityCard";
import PostalCard from "../components/PostalCard";


function Universities() {
    const [selectedCountry, setSelectedCountry] = useState("Mexico");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(countryActions.loadCountries());
    }, []);

    useEffect(() => {
        dispatch(actions.getUniversities(selectedCountry));
    }, [selectedCountry]);

    const manageCountry = (country) => {
        setSelectedCountry(country);
    }

    const countriesResponse = useSelector((state) => state.countries);
    const universitiesResponse = useSelector((state) => state.universities);

    if(countriesResponse.Loading || universitiesResponse.Loading) {
        return (
            <div>
                <CustomNavbar></CustomNavbar>
                <h1>Loading...</h1>
            </div>
        );
    }

    if(countriesResponse.error) {
        return (
            <div>
                <CustomNavbar></CustomNavbar>
                <h1>Something went wrong :(</h1>
            </div>
        );
    }

    if(countriesResponse.data && universitiesResponse.data) {

        return (
            <div style={{overflowX: "hidden"}}>
                <CustomNavbar></CustomNavbar>
                <div className="row" style={{height: "200px"}}>
                    <div className="col-12 d-flex justify-content-center mt-4">
                    <Dropdown style={{overflowY: "auto", width: "380px"}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Country
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {countriesResponse.data.map((country) => <Dropdown.Item as="button" key={country.cioc} onClick={() => manageCountry(country.name.common)}>
                              {country.name.common}
                          </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
                </div>

                <div className="row ms-5 p-0">
                    {universitiesResponse.data.map((university, index) => <UniversityCard key={index+"_"+university.name} university={university}
                                                                              className="m-3"></UniversityCard>)}
                </div>
            </div>
        );
    }
}

export default Universities;