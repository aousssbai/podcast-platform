import React from 'react';

import styles from './Footer.module.css';

const createFrame = () => {
  const iframe =
    '<iframe src="https://open.spotify.com/embed/album/6QaU1rQARouhrljXb37pAY" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';

  return { __html: iframe };
};

export default function Footer() {
  return (
    <div className={styles.Footer} dangerouslySetInnerHTML={createFrame()} />
  );
}
