import React, { useEffect, useState } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

function OmdbContainer() {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => searchMovies('Elvis'), [search]);

  // TODO: Use the useEffect hook to look up the movie Elvis
  // YOUR CODE HERE

  const searchMovies = query => {
    API.search(query)
      .then(res => setResult(res.data))
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    setSearch(event.target.value);
    // TODO: update state
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    searchMovies(search);
    // TODO: prevent the page from reloading
    // TODO: call the function to look up the movie
  }

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card
            heading={result.Title || "Search for a Movie to Begin"}
          >
            <MovieDetail
              title={result.Title}
              src={result.Poster}
              director={result.Director}
              genre={result.Genre}
              released={result.Released}
            />
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OmdbContainer;
