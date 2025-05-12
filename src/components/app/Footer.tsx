import React from 'react'

export default function Footer() {
  return (
    <footer className='shadow border-t px-3 flex items-center justify-between'>
      <p className='text-sm py-2'>&copy; {new Date().getFullYear()} OrdemPro. Todos os direitos reservados.</p>
      <p className='text-sm py-2'>MEGB</p>
    </footer>
  )
}
