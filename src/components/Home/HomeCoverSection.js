import React from "react";
import Image from "next/image";
import { sortBlogs } from "@/src/utils";

const HomeCoverSection = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];
    return (
        <div className="w-full inline-block">
            <article className="w-full flex flex-col items-start justify-end mx-10 relative h-[85vh]">
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    fill
                    className="w-full h-full object-center object-cover rounded- 3x1"
                />
            </article>
        </div>
    );
};

export default HomeCoverSection;
