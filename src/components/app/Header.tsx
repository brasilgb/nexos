import React from 'react';
import { DropdownUser } from './DropdownUser';

interface HeaderProps {
    userName: string;
}


export default function Header({userName}: HeaderProps) {
  return (
    <header className='bg-gray-500 flex items-center justify-between px-6'>
        <div>d</div>
        <div>
            <DropdownUser userName={userName} />
        </div>
    </header>
  )
}
