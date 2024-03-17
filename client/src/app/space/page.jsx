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
import SpaceCard from "@/app/_components/space-card";
import { Intro } from "../_components/intro";

export default function Space() {
  return (
    <main>
      <Container>
        <Intro />
        <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>창업공간</h1>
        <SpaceCard/>
        <article className="mb-32">
        </article>
      </Container>
    </main>
  );
}
