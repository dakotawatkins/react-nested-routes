import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { url } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return ( 
    <div> 
      <Route exact path={`${url}`}> 
        <ul>{postLinks}</ul> 
        <p>No post selected...</p> 
      </Route> 
      <Route path={`${url}/:postId`}> 
        <ul>{postLinks}</ul> 
        <UserPost posts={posts} /> 
      </Route> 
      <div> 
      </div> 
    </div> );
};

export default UserPosts;
