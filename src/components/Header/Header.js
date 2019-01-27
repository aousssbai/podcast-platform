import React from 'react';
import { Link } from 'gatsby';

import Logo from './Logo';
import Seif from './Seif';
import Omar from './Omar';
import Aouss from './Aouss';
import hosts from './hosts';
import { ReactComponent as RSS } from './icons/rss.svg';
import { ReactComponent as Podcast } from './icons/podcast.svg';
import { ReactComponent as Google } from './icons/google.svg';
import { ReactComponent as Spotify } from './icons/spotify.svg';
import { ReactComponent as SoundCloud } from './icons/soundcloud.svg';
import styles from './Header.module.css';

const profilesMap = {
  seif: Seif,
  omar: Omar,
  aouss: Aouss,
};

export default class Header extends React.Component {
  renderHost = host => {
    const Profile = profilesMap[host.id];

    return (
      <div className={styles.hostBlock} key={host.id}>
        <Profile className={styles.hostProfile} />
        <a href={host.sm.link}>
          <h2>{host.name}</h2>
        </a>
        <p>{host.description}</p>
      </div>
    );
  };

  render() {
    return (
      <header className={styles.Header}>
        <Link to="/">
          <Logo className={styles.Logo} />
        </Link>
        {hosts.map(this.renderHost)}
        <div className={styles.linksContainer}>
          <div className={styles.newsletter}>
            <form onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                name="email"
                placeholder="Subscribe to our newsletter"
              />
              <button type="submit" title="subscribe">
                SUBSCRIBE
              </button>
            </form>
          </div>
          <div className={styles.links}>
            <a className={styles.podcast} href="#" title="podcast">
              <Podcast />
            </a>
            <a className={styles.google} href="#" title="google podcasts">
              <Google />
            </a>
            <a className={styles.spotify} href="#" title="spotify">
              <Spotify />
            </a>
            <a className={styles.soundcloud} href="#" title="soundcloud">
              <SoundCloud />
            </a>
            <a className={styles.rss} href="#" title="rss">
              <RSS />
            </a>
          </div>
        </div>
      </header>
    );
  }
}
