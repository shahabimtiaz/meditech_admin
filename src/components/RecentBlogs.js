import axios from "axios";
import React, { useEffect, useState } from "react";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  document.documentElement.scrollTop = 0;

  const removecommas = (str) => {
    return str.slice(1, -1);
    // + str.charAt(0).toUpperCase();
  };

  function limitText(text, limit) {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  }

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/blog?limit=5&skip=0",
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
      <div class="card-body pb-0">
        <h5 class="card-title mt-2">
          Recent Health Blogs <span>| Today</span>
        </h5>

        <div class="news">
          {blogs.map((item, key) => {
            return (
              <div class="post-item clearfix">
                <img src={`assets/img/blog/blogs-${key + 1}.png`} alt="" />
                <h4>
                  <a href="/blog-item">
                    {removecommas(limitText(item.title, 35))}
                  </a>
                </h4>
                <p>{removecommas(limitText(item.description, 50))}</p>
              </div>
            );
          })}
        </div>
        {/* <!-- End sidebar recent posts--> */}
      </div>
    </div>
  );
};

export default RecentBlogs;
