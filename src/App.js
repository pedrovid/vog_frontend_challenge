import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./views/Posts";
import Home from "./views/Home";
import React from "react";
import PostForm from "./views/PostForm";
import Universities from "./views/Universities";

export default function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route path="/post/:id" element={<PostForm />} />
                    <Route path="/post" element={<PostForm />} />
                    <Route path="/universities" element={<Universities />} />
                </Routes>
            </BrowserRouter>
        );
    }
