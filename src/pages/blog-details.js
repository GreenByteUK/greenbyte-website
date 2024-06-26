import React from "react";
import { graphql } from "gatsby";
import { Seo } from "../components/seo";
import Layout from "../layout/layout";
import BlogBg from "../components/blog-bg";
import GradientPosition from "../components/gradient-position";
import BlogDetailsArea from "../components/blog/blog-details-area";

const BlogDetailsPage = ({ data }) => {
  if (!data || !data.bloggerPost) {
    return <div>Error: Blog post data is not available.</div>;
  }
  const blog = data.bloggerPost;

  return (
    <div className="single single-post">
      <Layout page={true}>
        <GradientPosition />
        <BlogBg />
        <BlogDetailsArea blog={blog} />
      </Layout>
    </div>
  );
};

export const query = graphql`
  query ($slug: String) {
    bloggerPost(slug: { eq: $slug }) {
      slug
      id
      title
      content
      published
      author {
        displayName
      }
    }
  }
`;

export default BlogDetailsPage;

export const Head = () => <Seo title="Blog Details" />;
