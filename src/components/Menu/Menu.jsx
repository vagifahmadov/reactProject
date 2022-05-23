import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ant design components
import { Menu as MenuAnt  } from 'antd';
import { ContainerOutlined, ProfileOutlined, ControlOutlined, BookOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Gələn müraciətlər', '/', <ProfileOutlined />),
  getItem('Göndərilən müraciətlər', 'outbox', <BookOutlined />),
  getItem('Müraciətlər', 'requests', <ContainerOutlined />),
  getItem('Sazlamalar', 'setting', <ControlOutlined />),
];

// ant design components


const Menu = () => {
  // ant design menu
  const onClick = (e) => {
    navigate(e.key, {replace: true})
  };
  // ant design menu
  const navigate = useNavigate();

  return (
    <div className='menu'>
      <div className='centerInside'>
        <MenuAnt
          onClick={onClick}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </div>
    </div>
  )
}

export default Menu;