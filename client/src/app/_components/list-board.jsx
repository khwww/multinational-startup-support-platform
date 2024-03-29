'use client';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import TableSortLabel from '@mui/material/TableSortLabel';
import axios from 'axios';
import { Spin } from 'antd';

export default function CommunityBoard() {
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      'http://43.202.133.160:8000/api/question/'
    );
    console.log(response.data);
    setRows(response.data.data);
  };
  const [rows, setRows] = React.useState(null);
  if (!rows) {
    return <Spin />;
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>번호</TableCell>
              <TableCell align='left'>글제목</TableCell>
              <TableCell align='right'>작성자</TableCell>
              <TableCell align='right'>날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.qid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.qid}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell align='right'>{row.content}</TableCell>
                <TableCell align='right'>{row.created_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{ textAlign: 'right', marginRight: '1rem', marginTop: '1rem' }}
      >
        <Link href='/community/write'>
          <Button
            color='primary'
            startIcon={<AddIcon />}
            style={{ marginBottom: '1rem' }}
          >
            글쓰기
          </Button>
        </Link>
      </div>
    </div>
  );
}
