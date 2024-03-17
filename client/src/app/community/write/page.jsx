import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import WriteBoard from "@/app/_components/write-board";
import { Intro } from "@/app/_components/intro";

export default function Write() {
  return (
    <main>
      <Container>
      <Intro/>
        <WriteBoard />
        <article className="mb-32">
        </article>
      </Container>
    </main>
  );
}
