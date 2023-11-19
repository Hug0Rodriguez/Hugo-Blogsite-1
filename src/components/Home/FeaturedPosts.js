import React from "react";
import { sortBlogs } from "@/src/utils";

const FeaturedPosts = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    return (
        <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
            <h2 ClassName="w-full inline-block font-bold capitalize text-4xl">
                FeaturedPosts
            </h2>
        </section>
    );
};

export default FeaturedPosts;
