'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Paper,
  Button,
  Divider,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/system';
import { usePathname } from 'next/navigation';
import { blue } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getSession } from 'next-auth/react';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

const StyledOutlinedButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2), // Increased margin for spacing between attachment buttons
  marginBottom: theme.spacing(1),
  '&:hover': {
    backgroundColor: blue[500],
    color: '#fff',
  },
}));

const BusinessNoticePage = () => {
  const pathname = usePathname();
  const lastSlashIndex = pathname.lastIndexOf('/');
  const articleId = pathname.substring(lastSlashIndex + 1);
  const [articleData, setArticleData] = useState(null);
  const [liked, setLiked] = useState(false);
<<<<<<< HEAD
  // const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsInVzZXJuYW1lIjoiaHl1bl93b28iLCJlbWFpbCI6ImtodzQ0MjBAbmF2ZXIuY29tIiwiaWF0IjoxNzEyMDU2MjY0LCJleHAiOjE3MTIwNTgwNjR9.sHrh9BnkkRzWUlytzjcUW6Ifsx8WVmh5Li3zuLW1pUE";
=======
  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjI5LCJ1c2VybmFtZSI6Imh5dW53b28iLCJlbWFpbCI6ImtodzQ0MjBAbmF2ZXIuY29tIiwicmVnaW9uIjoiYXNkIiwidGVsIjoiYXNkIiwiaWF0IjoxNzExNzEyNDA0LCJleHAiOjE3MTE3OTg4MDR9.Ua8N5SVi-KTGR28Jm5M9nqtYqvjytOOqJ85iVUc6TfA';
>>>>>>> main

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const token = `Bearer ${(await getSession()).user.id}`
        const response = await axios.get(`http://3.34.226.107:8000/api/article/${articleId}`, {
          headers: {
            Authorization: token
          }
        );
        setArticleData(response.data);
        setLiked(response.data.user_likes === '1');
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };

    if (articleId) {
      fetchArticleData();
    }
  }, [articleId]);

  const handleAttachmentButtonClick = (url) => {
    window.open(`https://www.k-startup.go.kr${url}`, '_blank');
  };

  const handleLikeClick = async () => {
    try {
      const token = `Bearer ${(await getSession()).user.id}`
      if (!liked) {
<<<<<<< HEAD
        await axios.post(`http://3.34.226.107:8000/api/article/${articleId}/like`, null, {
          headers: {
            Authorization: token
=======
        await axios.post(
          `http://3.34.226.107:8000/api/article/${articleId}/like`,
          null,
          {
            headers: {
              Authorization: token,
            },
>>>>>>> main
          }
        );
      } else {
<<<<<<< HEAD
        await axios.delete(`http://3.34.226.107:8000/api/article/${articleId}/like`, {
          headers: {
            Authorization: token
=======
        await axios.delete(
          `http://3.34.226.107:8000/api/article/${articleId}/like`,
          {
            headers: {
              Authorization: token,
            },
>>>>>>> main
          }
        );
      }
      setLiked(!liked);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  // HTML 문자열을 파싱하여 JSX로 변환하는 함수
  const parseHTML = (htmlString) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <div>
      {articleData && (
        <div>
          <Typography variant='h4'>{articleData.a_title}</Typography>
          <Divider sx={{ marginY: 1 }} />
          <StyledPaper>
            {articleData.a_content.info_box && (
              <>
                <Typography variant='h5' gutterBottom>
                  <strong>개요</strong>
                </Typography>
                <Divider sx={{ marginY: 1 }} />
                <TableContainer>
                  <Table>
                    <TableBody>
                      {Object.entries(articleData.a_content.info_box).map(
                        ([key, value], index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <strong>{key}: </strong>
                            </TableCell>
                            <TableCell>{value}</TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
            <Divider sx={{ marginY: 1 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {parseHTML(articleData.a_content.desc_list)}
            </Box>
          </StyledPaper>
          <StyledPaper>
            <Typography
              variant='h5'
              sx={{ fontWeight: 'bold', marginBottom: 1 }}
            >
              첨부파일
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {articleData.a_content.attachment_list.map(
                (attachment, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: 1,
                    }}
                  >
                    <StyledOutlinedButton
                      onClick={() =>
                        handleAttachmentButtonClick(attachment.url)
                      }
                      color='primary'
                      variant='contained'
                      disableElevation
                      size='small'
                      style={{ borderRadius: '5px' }}
                    >
                      {attachment.name}
                    </StyledOutlinedButton>
                  </Box>
                )
              )}
            </Box>
          </StyledPaper>
          <StyledPaper>
            <IconButton onClick={handleLikeClick}>
              {liked ? (
                <FavoriteIcon color='error' style={{ fontSize: '5rem' }} />
              ) : (
                <FavoriteBorderIcon style={{ fontSize: '5rem' }} />
              )}
            </IconButton>
            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
              좋아요
            </Typography>
          </StyledPaper>
        </div>
      )}
    </div>
  );
};

export default BusinessNoticePage;
