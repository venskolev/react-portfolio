import React from 'react';
import "./footer.css";
// import { makeStyles } from '@mui/styles';
import { Container, Typography, Link } from '@mui/material';
import { logotext, socialprofils, full_name } from "../content_option";

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     padding: theme.spacing(2),
//     marginTop: 'auto',
//     backgroundColor: theme.palette.grey[900],
//     color: theme.palette.common.white,
//   },
// }));

export const Footer = () => {
  // const classes = useStyles();

  return (
    <footer >
      <Container maxWidth="md">
      <div className="menu_footer d-flex flex-column flex-md-row justify-content-between fixed-bottom p-3">
          <Container>
            <Typography>{logotext}</Typography>
            <Link href={socialprofils.facebook}>Facebook</Link>
            <Link href={socialprofils.github}>Github</Link>
            <Link href={socialprofils.twitter}>Twitter</Link>
            </Container>
          <Container
            sx={{
              alignSelf: 'end',
              textAlign: 'end',
            }}
          >copyright © 2023 all rights reserved - {full_name}</Container>
          </div>
      </Container>
    </footer>
  );
};

