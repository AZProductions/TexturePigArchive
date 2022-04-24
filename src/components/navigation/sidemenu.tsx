import { Card, Description, Link, Spacer, useTheme } from '@geist-ui/core';
import React from 'react';

function Sidemenu() {
  const theme = useTheme();

  return (
    <>
      <Card
        className="Card"
        style={{
          background: theme.palette.accents_1,
          height: '100%',
          borderRadius: '0',
          width: '150%',
          borderTop: 'none',
          borderBottom: 'none'
        }}
      >
        {' '}
        <Spacer h={2}></Spacer>
        <Description
          title="Introductions"
          content={
            <>
              <Link color underline>
                Welcome
              </Link>
              <Spacer h={0.5}></Spacer>
              <Link underline>Downloads</Link>
              <Spacer h={0.5}></Spacer>
              <Link underline>Getting Started</Link>
            </>
          }
        ></Description>
        <Spacer h={2}></Spacer>
        <Description
          title="Vacaro"
          content={
            <>
              <Link underline>Downloads</Link>
              <Spacer h={0.5}></Spacer>
              <Link underline>Getting Started</Link>
              <Spacer h={0.5}></Spacer>
              <Link underline>Framework</Link>
            </>
          }
        ></Description>
      </Card>
      <style jsx>{`
        .Card {
          background: ${theme.palette.accents_1};
        }
      `}</style>
    </>
  );
}

export default Sidemenu;
