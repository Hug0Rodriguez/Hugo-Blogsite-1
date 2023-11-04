import { makeSource, defineDocumentType } from "@contentlayer/source-files";

const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: "**/**/*.mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        publishAt: {
            type: "date",
            required: true,
        },
        updatedAt: {
            type: "date",
            required: true,
        },
    },
}));

export default makeSource({
    /* options */
    contentDirPath: "content",
});
