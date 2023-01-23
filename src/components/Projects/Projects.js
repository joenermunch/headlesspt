import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.scss";
import Filterizr from "filterizr";

export default function Projects() {
  const [allPosts, setData] = useState([]);
  const [gotData, setGotData] = useState(false);
  const [gotRender, setRender] = useState(false);
  const [taxonomies, setTaxonomies] = useState([]);
  const [gotTaxonomies, setGotTaxonomies] = useState(false);
  const [selectedTaxonomies, setSelectedTaxonomies] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get("/backend/wp-json/wp/v2/project?_embed");
      setData(response.data);
      setGotData(true);
    } catch (err) {
      setGotData(false);
    }
  };

  const loadTax = async () => {
    try {
      const response = await axios.get("/backend/wp-json/wp/v2/stack");
      setTaxonomies(response.data);
      setGotTaxonomies(true);
    } catch (err) {}
  };

  // on render

  useEffect(() => {
    loadData();
    loadTax();
  }, []);

  // waits on tax select

  useEffect(() => {
    let filteredarray = [];

    allPosts.map((post) => {
      // checks all posts array if post has the selected tax

      const found = selectedTaxonomies.some(
        (r) => post.Stack.indexOf(parseInt(r)) >= 0
      );

      // if found, include the post on the filtered posts array

      if (found && !filteredarray.includes(post)) {
        filteredarray.push(post);
      }
    });

    setFilteredPosts(filteredarray);
  }, [selectedTaxonomies]);

  // tax select

  const taxonomyClicked = (e) => {
    // check if it is already selected, if so, unselect

    selectedTaxonomies.includes(e.target.dataset.id)
      ? setSelectedTaxonomies(
          selectedTaxonomies.filter(
            (taxonomy) => taxonomy !== e.target.dataset.id
          )
        )
      : setSelectedTaxonomies([...selectedTaxonomies, e.target.dataset.id]);
  };

  const RenderTaxonomies = () => {
    if (taxonomies.length > 0) {
      return taxonomies.map((tax) => {
        return (
          <span
            className={
              selectedTaxonomies.includes(tax.id.toString())
                ? "tax active"
                : "tax"
            }
            key={tax.id}
            data-id={tax.id}
            // onClick={taxonomyClicked}
          >
            {tax.name}
          </span>
        );
      });
    } else {
      return gotTaxonomies ? "No taxonomies found" : "Loading";
    }
  };

  const toRender = (post) => (
    <div
      className="post-item post"
      data-stack={post.Stack.join(",")}
      key={post.id}
    >
      <img src={post["_embedded"]["wp:featuredmedia"][0]["source_url"]} />
      <div className="text-container">
        <h3>{post.title.rendered}</h3>
        <p>{post.excerpt.rendered}</p>
      </div>
    </div>
  );

  const RenderPosts = () => {
    // display all posts if filter is not selected

    let filter = filteredPosts.length > 0 ? filteredPosts : allPosts;

    if (filter.length > 0) {
      return filter.map((post) => {
        return toRender(post);
      });
    } else {
      return allPosts.map((post) => {
        return toRender(post);
      });
    }
  };

  return (
    <>
      <div className="inner-block">
        <div className="projects-container main-margin">
          <h2>Projects</h2>
          <div className="tax-container">
            <RenderTaxonomies />
          </div>
          <div className="posts-container">
            <RenderPosts />
          </div>
        </div>
      </div>
    </>
  );
}
