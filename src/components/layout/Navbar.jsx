import React from 'react';
import PillNav from './PillNav';
import { FaUnity } from 'react-icons/fa';

const Navbar = () => {
  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <PillNav
      navItems={menuItems}
      logo={<FaUnity style={{ width: '100%', height: '100%', color: '#14b8ff' }} />}
      baseColor="rgba(13, 15, 20, 0.8)" // Menü arkaplanı (Buzlu Camı CSS halledecek ama bu renk tabanı)
      pillColor="transparent"
      pillTextColor="#fff"
      hoveredPillTextColor="#000"
    />
  );
};

export default Navbar;