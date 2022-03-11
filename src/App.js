import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./views/Posts";
import Home from "./views/Home";
import React from "react";
import PostForm from "./views/PostForm";

export default function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/post/:id" element={<PostForm />} />
                    <Route path="/post" element={<PostForm />} />
                </Routes>
            </BrowserRouter>
        );
    }
