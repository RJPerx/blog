import React from 'react';


function Home() {
  return (
    <>
        <div class="jumbotron jumbotron-fluid bg-primary text-white">
            <div class="container">
                <h1 class="display-4">Welcome to the Web Developer Blog</h1>
                <p class="lead">Stay up-to-date with the latest web development trends, tips, and techniques.</p>
            </div>
        </div>
        <div class="container my-5">
            <div class="row">
                <div class="col-md-8">
                    <h2>Featured Article</h2>
                    <div class="card mb-3">
                        <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="Featured"/>
                        <div class="card-body">
                            <h5 class="card-title">The Benefits of Using React for Web Development</h5>
                            <p class="card-text">React is a popular JavaScript library for building user interfaces. It
                                is efficient, flexible, and easy to use, making it a great choice for web developers. In
                                this article, we'll explore the benefits of using React, including its ability to handle
                                complex UI interactions, its virtual DOM that makes rendering faster, and its reusable
                                components. We'll also look at how React can be integrated with other libraries and
                                tools, making it a versatile option for modern web development. So, if you're looking to
                                improve your web development skills and build dynamic and interactive web applications,
                                consider giving React a try!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <h2>Recent Posts</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h5>Getting Started with Bootstrap 5</h5>
                            <p>Bootstrap is one of the most popular CSS frameworks for building responsive and
                                mobile-friendly websites. In this tutorial, we'll go over the basics of Bootstrap 5 and
                                how to get started with creating your own layouts and styles.</p>
                        </li>
                        <li class="list-group-item">
                            <h5>Building a RESTful API with Express</h5>
                            <p>Express is a popular Node.js framework for building web applications and APIs. In this
                                tutorial, we'll learn how to build a RESTful API using Express and some of the best
                                practices for structuring and securing your API.</p>
                        </li>
                        <li class="list-group-item">
                            <h5>CSS Grid Layout Basics</h5>
                            <p>CSS Grid Layout is a new layout system in CSS that allows you to create complex and
                                dynamic layouts with ease. In this tutorial, we'll go over the basics of CSS Grid Layout
                                and how to start using it in your own projects.</p>
                        </li>
                        <li class="list-group-item">
                             <h5>Creating Effective Landing Pages with Tailwind CSS</h5>
                        <p>Landing pages are an essential part of any online marketing strategy, and using Tailwind CSS can help you create effective landing pages that convert visitors into customers. In this article, we'll go over the best practices for using Tailwind CSS to create landing pages that are optimized for conversion. From layout and design to content and call-to-action buttons, we'll cover everything you need to know to create landing pages that get results.</p>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
}

export default Home;
