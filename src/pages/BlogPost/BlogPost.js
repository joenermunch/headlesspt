import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import "./BlogPost.scss";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function BlogPost() {
  const [post, setPost] = useState([]);
  const [posts, setPosts] = useState([]);
  let { slug } = useParams();
  let name = "";

  const loadData = async () => {
    try {
      const response = await axios.get(
        `/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      const responsePosts = await axios.get(
        `/wp-json/wp/v2/posts?exclude=${response.data[0].id}&per_page=3&_embed`
      );
      setPost(response.data);
      setPosts(responsePosts.data);
    } catch (err) {
      setPost([]);
    }
  };

  useEffect(() => {
    loadData();
  }, [slug]);

  const navigate = useNavigate();

  const RenderSidebar = () => {
    if (posts.length > 0) {
      return posts.map((sidepost) => {
        console.log(sidepost.slug);
        return (
          <h4
            onClick={() => {
              navigate(`/blog/${sidepost.slug}`, { replace: true });
              setPost([]);
              setPosts([]);
              slug = sidepost.slug;
            }}
          >
            {parse(sidepost.title.rendered)}
          </h4>
        );
      });
    } else return <Skeleton count={3} />;
  };

  const RenderCategories = () => {
    if (post[0]) {
      return post[0]._embedded["wp:term"][0].map((category) => {
        return <span className="category">{category.name}</span>;
      });
    } else return "";
  };

  const RenderMeta = () => {
    if (post[0]) {
      return (
        <Helmet>
          <title>{parse(post[0].title.rendered)}</title>
          <meta name="description" content={parse(post[0].excerpt.rendered)} />
        </Helmet>
      );
    }
  };

  const RenderPost = () => {
    console.log(post);
    return (
      <>
        <div className="inner-hero  inner-block">
          <div className="main-margin">
            <div className="text-container">
              <div className="breadcrumbs">
                <Link to="/blog">Back to Blog</Link>
              </div>
              <h1>{post[0] ? parse(post[0].title.rendered) : <Skeleton />}</h1>
              <div class="category-container">{<RenderCategories />}</div>
              <div>
                <p>
                  {" "}
                  {post[0] ? (
                    parse(post[0].excerpt.rendered)
                  ) : (
                    <Skeleton count={3} />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="post-content inner-block">
          <div className="main-margin post-columns">
            <div className="post-inner">
              {post[0] ? (
                parse(post[0].content.rendered)
              ) : (
                <>
                  <Skeleton height={100} />
                  <Skeleton count={3} />
                  <Skeleton height={100} />
                  <Skeleton count={10} />
                </>
              )}
            </div>

            <div className="sidebar">
              {posts.length > 0 ? (
                <h3>More Posts</h3>
              ) : (
                <Skeleton height={30} />
              )}
              <div className="sidebar-post-container">
                <RenderSidebar />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <RenderMeta />
      <div className="post-container">
        <RenderPost />
      </div>
    </>
  );
}

export default BlogPost;
