import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  document.documentElement.scrollTop = 0;

  const removecommas = (str) => {
    return str.slice(1, -1);
    // + str.charAt(0).toUpperCase();
  };
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/blog?limit=6&skip=0",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setBlogs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Blog</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Blog</li>
            </ol>
          </nav>
        </div>

        <section class="section">
          <div class="row align-items-top">
            {blogs.map((item, key) => (
              <div class="col-lg-6">
                <div class="card">
                  <div className="post-img">
                  <img
                    src={`assets/img/blog/blogs-${key + 1}.png`}
                    alt=""
                    class="img-fluid"
                    height={"300px"}
                  />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      <Link to="/blog-item">{removecommas(item.title)}</Link>
                    </h5>
                    <p class="card-text">{removecommas(item.description)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
