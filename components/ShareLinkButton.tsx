'use client';

import { useState } from 'react';
import { LinkIcon } from '@heroicons/react/20/solid';

const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);

    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 2500);
  }

  return (
    <button
      onClick={handleClick}
      className='border flex gap-1 px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700'
    >
      <LinkIcon className='h-4 w-4' />
      {clicked ? 'Copied!' : 'Share Link'}
    </button>
  );
};

export default ShareLinkButton;
