import React from 'react';
import { DropdownUser } from './DropdownUser';

interface HeaderProps {
    userName: string;
}


export default function Header({userName}: HeaderProps) {
  return (
    <header className='flex items-center justify-between px-6 shadow py-2'>
        <div></div>
        <div>
            <DropdownUser userName={userName} />
        </div>
    </header>
  )
}
