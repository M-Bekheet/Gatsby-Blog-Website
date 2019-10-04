import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss';
import scrollToElement from 'scroll-to-element';
import { Menu, Button } from 'antd';
import Contact from '../components/contact';



const Header = props => {
  const [currentMenuItem, setCurrentMenuItem] = useState('');
  

  const handleLinkScroll = (e, target) => {
    if (typeof window !== undefined) {
      if (window.location.pathname === '/') {
        console.log(e.event);
        e.preventDefault();
        scrollToElement(target, {
          duration: 1000,
          offset: -90
        })
      }
    }
  }


  const handleMenuClick = e => {
    setCurrentMenuItem(e.key)
  }
 
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }`
  );

  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <Link to="/" >
          {data.site.siteMetadata.title}
        </Link>
      </h1>

      <Menu onClick={handleMenuClick} className={headerStyles.navList} selectedKeys={[currentMenuItem]} mode="horizontal">
        <Menu.Item className={headerStyles.navItem} key="home">
            <Link  to="/">Home</Link>
        </Menu.Item>
        <Menu.Item className={headerStyles.navItem} key="about" >
          <Link
            onClick={e => handleLinkScroll(e, '#About')}
            to="/#About"
          >
            About
          </Link>
        </Menu.Item>
        <Menu.Item className={headerStyles.navItem} key="portfolio" >
          <Link
            onClick={e => handleLinkScroll(e, '#Portfolio')}
            to="/#Portfolio"
          >
            Portfolio
          </Link>
        </Menu.Item>
        <Menu.Item className={headerStyles.navItem} key="blog" >
          <Link  to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item className={`${headerStyles.navItem} ${headerStyles.contactBtn}`} key="contact" >
          <Button>
            <div >
              <Contact />
            </div>
          </Button>
        </Menu.Item>
      </Menu>
    </header>
   )
}

export default Header;