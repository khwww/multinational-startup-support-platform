'use client';
import React from 'react';
import Container from '@/app/_components/container';
import { HeroPost } from '@/app/_components/hero-post';
import { Intro } from '@/app/_components/intro';
import { MoreStories } from '@/app/_components/more-stories';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

interface DataType {
  key: string;
  title: string;
  type: string;
  author: string;
  tags: string[];
}

export default function Index() {
  const router = useRouter();
  const columns: TableProps<DataType>['columns'] = [
    {
      title: '제목',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '지원분야',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '기관명',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '태그',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color;
            if (tag === '마감') {
              color = 'volcano';
            } else if (tag === '한국인') {
              color = 'green';
            } else if (tag === '외국인') {
              color = 'geekblue';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '지원하기',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <a>공고보기</a>
          <a>지원하기</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      title: '온라인 법인설립시스템 길라잡이 서비스 참여자 모집',
      type: '창업교육',
      author: '창업진흥원',
      tags: ['한국인', '외국인'],
    },
    {
      key: '2',
      title: '2024년 공공시장 진출 프로그램(5기) 창업기업 모집',
      type: '멘토링',
      author: '창업진흥원',
      tags: ['마감'],
    },
    {
      key: '3',
      title: '2024 글로벌 유니콘 프로젝트 참여기업 모집 및 지원계획 통합공고',
      type: '사업화',
      author: '기술보증기금',
      tags: ['한국인', '외국인'],
    },
  ];
  return (
    <main>
      <Container>
        <Intro />
        <Space className='justify-between mb-3'>
          <h1 style={{ fontSize: 20, fontWeight: 'bolder' }}>
            사업공고 게시판
          </h1>

          {/* <div className='flex-item-list'>
            <Button
              type='primary'
              onClick={() => router.push('/business-notice/new')}
              icon={<EditOutlined />}
            >
              글쓰기
            </Button>
          </div> */}
        </Space>
        <Table columns={columns} dataSource={data} />
      </Container>
    </main>
  );
}
