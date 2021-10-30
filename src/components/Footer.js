import React from 'react'
import TMDBLogo from '../static/images/tmdb.svg'

const footer = () => (
  <footer className='footer'>
    <TMDBLogo className='footer__tmdb-logo' />
    <div className='footer__copyright'>
      &copy; 2021 Made with ❤️ by{' '}
      <a className='footer__copyright--link' href='www.sithumimarsha.com'>
        {' '}
        Sithum Imarsha
      </a>
    </div>
  </footer>
)

export default footer
