import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarCard from "./SearchBarCard.js";


// Scrollbar import
import { Scrollbars } from "react-custom-scrollbars";

const SearchBar = props => {
  const [search, setSearch] = useState("");
  //TODO attempt
  const [searchResults, setSearchResults] = useState([]);


  const [chapters, setChapters] = useState([
    {
      id: 1,
      city: "",
      state: "",
      description: "",
      email: ""
    }
  ])

  useEffect(() => {
    axios
      .get("https://miracle-messages-dev.herokuapp.com/api/chapter", chapters)
      .then(res => {
        // console.log("response from SearchBar axios call", res)
        setChapters(res.data)
      })
      .catch(error => {
        console.log("this is catch from SearchBar", error)
      })
  }, [])

  const handleChange = event => {
    setSearch(event.target.value)
  };

  useEffect(() => {
    const results = chapters.filter(chapter => chapter.city.toLowerCase().includes(search)
    )
    setSearchResults(results)
  }, [search]);

  // const filterFunction = chapters.filter(chapter =>
  //   chapter.city.toLowerCase().includes(search.toLowerCase())
  // )

  return (
    <>
      <div className="form-div">
        <form className="search-form">
          <input
            type="text"
            // name="location"
            placeholder="Search Chapters"
            value={search}
            onChange={handleChange}
            style={{ margin: "50px" }}
            className="input"
          />
        </form>
      </div>
    </>
  )
}

export default SearchBar
