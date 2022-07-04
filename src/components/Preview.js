import React from "react";

/**
 * We need to import fetchQueryResultsFromURL since we will sometimes have urls in info.prev and info.next
 * which are query urls.
 */
import { fetchQueryResultsFromURL } from "../api";

const Preview = ({
  setSearchResults,
  setFeaturedResult,
  setIsLoading,
  searchResults: { info, records },
}) => {
  /**
   *  Destructure setSearchResults, setFeaturedResult, and setIsLoading from props
   *  and also destructure info and records from props.searchResults
   *
   * You need info, records, setSearchResults, setFeaturedResult, and setIsLoading as available constants
   */

  /**
   * Don't touch this function, it's good to go.
   *
   * It has to be defined inside the Preview component to have access to setIsLoading, setSearchResults, etc...
   */
  async function fetchPage(pageUrl) {
    setIsLoading(true);

    try {
      const results = await fetchQueryResultsFromURL(pageUrl);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <aside id="preview">
      <header className="pagination">
        {/* This button should be disabled if nothing is set in info.prev, and should call fetchPage with info.prev when clicked */}
        <button
          // TODO Fill in the {} with the correct value
          disabled={!info.prev}
          className="previous"
          // TODO Fill in or replace this onClick with the correct callback
          onClick={() => {
            fetchPage(info.prev);
          }}
        >
          Previous
        </button>
        {/* This button should be disabled if nothing is set in info.next, and should call fetchPage with info.next when clicked */}
        <button
          // TODO in the next {} with the correct value:
          disabled={!info.next}
          className="next"
          // TODO Fill in or replace this on Click with the correct callback
          onClick={() => {
            fetchPage(info.next);
          }}
        >
          Next
        </button>
      </header>
      <section className="results">
        {records.map((record) => (
          <div
            key={record.id}
            className="object-preview"
            onClick={(event) => {
              event.preventDefault();
              setFeaturedResult(record);
            }}
          >
            {
              record.primaryimageurl ? (
                <img src={record.primaryimageurl} alt={record.description} />
              ) : null
              // if the record.primaryimageurl exists, show this: <img src={ record.primaryimageurl } alt={ record.description } />, otherwise show nothing
            }
            {
              record.title ? <h3>{record.title}</h3> : <h3>MISSING INFO</h3>
              // if the record.title exists, add this: <h3>{ record.title }</h3>, otherwise show this: <h3>MISSING INFO</h3>
            }
          </div>
        ))}
      </section>
    </aside>
  );
};

export default Preview;
