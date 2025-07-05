import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Hero = defineDocumentType(() => ({
  name: 'Hero',
  filePathPattern: 'hero.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string', required: true },
    ctaText: { type: 'string', required: true },
    ctaLink: { type: 'string', required: true },
  },
}));

export const NinjaDao = defineDocumentType(() => ({
  name: 'NinjaDao',
  filePathPattern: 'ninja-dao.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    cards: { type: 'list', of: { type: 'json' }, required: true },
    images: { type: 'list', of: { type: 'string' }, required: true },
  },
}));

export const CNP = defineDocumentType(() => ({
  name: 'CNP',
  filePathPattern: 'cnp.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    images: { type: 'list', of: { type: 'string' }, required: true },
  },
}));

export const Roadmap = defineDocumentType(() => ({
  name: 'Roadmap',
  filePathPattern: 'roadmap.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    items: { type: 'list', of: { type: 'json' }, required: true },
  },
}));

export const FAQ = defineDocumentType(() => ({
  name: 'FAQ',
  filePathPattern: 'faq.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    questions: { type: 'list', of: { type: 'json' }, required: true },
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Hero, NinjaDao, CNP, Roadmap, FAQ],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
        },
      ],
    ],
  },
});
