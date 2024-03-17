'use client';
import Container from '@/app/_components/container';
import { Intro } from '@/app/_components/intro';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Flex, Space } from 'antd';

export default function Index() {
  const { Meta } = Card;

  return (
    <main>
      <Container>
        <Intro />
        <Space className='justify-between mb-3'>
          <h1 style={{ fontSize: 20, fontWeight: 'bolder' }}>카드 뉴스</h1>
        </Space>
        <Flex gap={50}>
          <Card
            style={{ width: 300, height: 300 }}
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
          >
            <Meta
              avatar={
                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=8' />
              }
              title='2023 DIPS 테크 컨퍼런스'
              description='2023/11/30 11:10'
            />
          </Card>
          <Card
            style={{ width: 300, height: 300 }}
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
          >
            <Meta
              avatar={
                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=8' />
              }
              title='메이커 활성화 지원사업 2023'
              description='2023/11/17 10:39'
            />
          </Card>
          <Card
            style={{ width: 300, height: 300 }}
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
          >
            <Meta
              avatar={
                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=8' />
              }
              title='IR 2023 플레이 스타트업'
              description='2023/11/28 11:04'
            />
          </Card>
        </Flex>
      </Container>
    </main>
  );
}
