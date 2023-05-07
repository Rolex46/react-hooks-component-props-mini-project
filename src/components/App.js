import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";

console.log(blogData);

function ArticleList({posts}){
  return (
    <main>
    {posts.map((post) => 
       <Article key={post.id} title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
       />)}
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
      </div>
  );
}

export default App;