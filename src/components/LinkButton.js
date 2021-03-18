import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import tiktokIcon from '@iconify/icons-simple-icons/tiktok';
import youtubeIcon from '@iconify/icons-simple-icons/youtube';
import instagramIcon from '@iconify/icons-simple-icons/instagram';
import anchorIcon from '@iconify-icons/simple-icons/anchor';

const LinkButton = (props) => {
  const [icon, setIcon] = useState('');
  useEffect(() => {
    if (props.link.includes('youtube')) {
      setIcon(<Icon icon={youtubeIcon} />);
    } else if (props.link.includes('instagram')) {
      setIcon(<Icon icon={instagramIcon} />);
    } else if (props.link.includes('tiktok')) {
      setIcon(<Icon icon={tiktokIcon} />);
    } else if (props.link.includes('anchor')) {
      setIcon(<Icon icon={anchorIcon} />);
    } else {
      setIcon('Uncaught Exceptions Pod');
    }
  }, [props]);

  return (
    <Button
      variant="outline-light"
      href={props.link}
      className="mb-3 max-button"
      size="lg"
      block
    >
      {icon}
    </Button>
  );
};

export default LinkButton;
