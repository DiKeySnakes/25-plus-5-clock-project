function Footer() {
  return (
    <div id='footer'>
      <footer>
        <p>
          Created by DiKeySnakes for
          <a
            href='https://www.freecodecamp.org/'
            target='_blank'
            rel='noopener noreferrer'>
            {' '}
            freeCodeCamp <i className='fa-brands fa-free-code-camp'></i>
          </a>{' '}
          curriculum
        </p>
        <p>
          Copyright © DiKeySnakes 2023
          <a
            href='https://github.com/DiKeySnakes/25-plus-5-clock-project'
            target='_blank'
            rel='noopener noreferrer'>
            {' '}
            <i id='githubIcon' className='fa-brands fa-github'></i>
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
