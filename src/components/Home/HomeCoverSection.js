import React from "react";
import Image from "next/image";
import { sortBlogs } from "@/src/utils";

const HomeCoverSection = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];
    return (
        <div className="w-full inline-block">
            <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
                <div
                    className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            "
                />
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    fill
                    className="w-full h-full object-center object-cover rounded-3xl -z-10 "
                />
            </article>
        </div>
    );
};

export default HomeCoverSection;
