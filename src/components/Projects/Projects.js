import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.scss";

export default function Projects() {
  const [allPosts, setData] = useState([]);
  const [gotData, setGotData] = useState(false);
  const [taxonomies, setTaxonomies] = useState([]);
  const [gotTaxonomies, setGotTaxonomies] = useState(false);
  const [selectedTaxonomies, setSelectedTaxonomies] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get("/wp-json/wp/v2/project");
      setData(response.data);
      setGotData(true);
    } catch (err) {
      setGotData(false);
    }
  };

  const loadTax = async () => {
    try {
      const response = await axios.get("/wp-json/wp/v2/stack");
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
      const found = selectedTaxonomies.some(
        (r) => post.Stack.indexOf(parseInt(r)) >= 0
      );

      if (found && !filteredarray.includes(post)) {
        filteredarray.push(post);
      }
    });

    setFilteredPosts(filteredarray);
  }, [selectedTaxonomies]);

  // tax select

  const taxonomyClicked = (e) => {
    if (selectedTaxonomies.includes(e.target.dataset.id)) {
      setSelectedTaxonomies(
        selectedTaxonomies.filter(
          (taxonomy) => taxonomy !== e.target.dataset.id
        )
      );
    } else {
      setSelectedTaxonomies([...selectedTaxonomies, e.target.dataset.id]);
    }
  };

  const RenderTaxonomies = () => {
    if (taxonomies.length > 0) {
      return taxonomies.map((tax) => {
        return (
          <p
            className={
              selectedTaxonomies.includes(tax.id.toString())
                ? "tax active"
                : "tax"
            }
            key={tax.id}
            data-id={tax.id}
            onClick={taxonomyClicked}
          >
            {tax.name}
          </p>
        );
      });
    } else {
      return gotTaxonomies ? "No taxonomies found" : "Loading";
    }
  };

  const RenderPosts = () => {
    let filter = filteredPosts.length > 0 ? filteredPosts : allPosts;

    if (filter.length > 0) {
      return filter.map((post) => {
        return (
          <p className="post" key={post.id} data-stack={post.Stack.join(",")}>
            {post.title.rendered}
          </p>
        );
      });
    } else {
      return allPosts.map((post) => {
        return (
          <p className="post" key={post.id} data-stack={post.Stack.join(",")}>
            {post.title.rendered}
          </p>
        );
      });
    }
  };

  return (
    <>
      <RenderTaxonomies />
      <RenderPosts />
    </>
  );
}
