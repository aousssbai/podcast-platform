import React from 'react';
import { Link } from 'gatsby';

import episodes from './episodes';
import styles from './Main.module.css';

function getEpisodeLink(episode, number) {
  const id = ('0' + number).slice(-2);
  const title = episode
    .toLowerCase()
    .replace(/[?&]/g, '')
    .replace(/\s/g, '-');

  return `/episodes/${id}/${title}`;
}

export default class Main extends React.Component {
  renderEpisode(episode, idx) {
    return (
      <li key={idx}>
        <Link to={getEpisodeLink(episode, idx + 1)}>
          <p className={styles.epiodeIndex}>{`EPISODE ${idx + 1}`}</p>
          <h3 className={styles.episodeTitle}>{episode}</h3>
        </Link>
      </li>
    );
  }

  render() {
    return (
      <main className={styles.Main}>
        <ul>{episodes.map(this.renderEpisode)}</ul>
        <div className={styles.description}>{this.props.children}</div>
      </main>
    );
  }
}
