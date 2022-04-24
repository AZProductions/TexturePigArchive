import React from 'react';
import { Text, Link, useTheme, Tag, Spacer } from '@geist-ui/core';
import Status from '../status';
import Logo from '../logo';
const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <footer className="footer-dark">
        <div className="container">
          <div className="row" style={{ marginTop: 40 }}>
            <div className="col">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a target="_blank" href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Products</h3>
              <ul>
                <li>
                  <a href="/downloads">Download</a>
                </li>
                <li>
                  <a href="/cloud#hosting">Hosting</a>
                </li>
                <li>
                  <a href="/cloud">Cloud</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col col-md item">
              <h3>Guides</h3>
              <ul>
                <li>
                  <a target="_blank" href="/docs">Documentation</a>
                </li>
                <li>
                  <a href="#">Examples</a>
                </li>
              </ul>
            </div>
            <div className="col-md item text">
              <h3 style={{ fontFamily: 'Poppins', marginTop: 30, fontWeight: 500}}><Logo/></h3>
            </div>
            <div className="col-md">
              <ul>
                <ol>
                  <a href="/privacy">Privacy</a>
                </ol>
                <ol>
                  <a href="/security">Security</a>
                </ol>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item" style={{marginTop: 15}}>
              <Status></Status>
              <Spacer h={0.5} />
              <Tag type="success">
                We're <strong><Link underline icon color href="/blog/carbon-impact">Carbon Neutral</Link></strong>
              </Tag>
              <Spacer h={0.5} />
              <Tag type="lite"><Link underline href='mailto:hello@azsoftware.org'>hello@azsoftware.org</Link></Tag>
            </div>
          </div>
          <p className="copyright">© AZ Software 2016-{new Date().getFullYear()}</p>
        </div>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid ${theme.palette.border};
          padding: ${theme.layout.gapQuarter} ${theme.layout.gap};
          background-color: ${theme.palette.accents_1};
          z-index: 99;
          color: ${theme.palette.foreground};
        }
        .copyright {
          margin-top: 14px;
          margin-bottom: 0;
          font-size: 13px;
          opacity: 0.6;
        }
      `}</style>
    </>
  );
};

export default Footer;
