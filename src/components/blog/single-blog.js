import { Link } from "gatsby";
import React from "react";
import parse from "react-html-parser";
import { formatDate } from "../../utils/format";

const SingleBlog = ({ blog }) => {
  console.log(blog);

  // Extracting the slug, year, and month from the API output
  const { slug, published } = blog.node;
  const year = new Date(published).getFullYear();
  let month = new Date(published).getMonth() + 1; // Adding 1 because getMonth returns 0-based index
  month = month < 10 ? `0${month}` : month; // Adding leading zero if month is less than 10

  // Creating the share URL
  const shareUrl = `https://anwtest1.blogspot.com/${year}/${month}/${slug}.html`;

  return (
    <div className="blog-post-item">
      {/* <div className="blog-post-thumb">
        <Link to="/blog-details">
          <img src={blog.node.author.img} alt="img" />
        </Link>
      </div> */}
      <div className="blog-post-content">
        <div className="blog-post-meta">
          <ul className="list-wrap">
            <li>
              <i className="far fa-user"></i>
              <Link to="/blog">{blog.node.author.displayName}</Link>
            </li>
            <li>
              <i className="far fa-calendar-alt"></i>
              {formatDate(blog.node.published)}
            </li>
            <li>
              {/* Share button */}
              <i className="fas fa-share"></i>
              <a href={shareUrl} target="_blank" rel="noopener noreferrer">
                Share
              </a>
            </li>
          </ul>
        </div>
        <h2 className="title">
          <Link to="/blog-details">{blog.node.title}</Link>
        </h2>
        <p>{parse(blog.node.content)}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
