import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Board from "@/app/_components/list-board";
import { Intro } from "../_components/intro";

export default function Community() {
  return (
    <main>
      <Container>
        <Intro />
        <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>커뮤니티</h1>
        <Board />
        <article className="mb-32">
        </article>
      </Container>
    </main>
  );
}
