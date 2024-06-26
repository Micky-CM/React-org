import "./Footer.css"

const Footer = ()=>{
  return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className="media">
      <a href='https://github.com/Micky-CM'>
        <img src="/img/github.png" alt='GitHub' />
      </a>
      <a href='https://www.aluracursos.com/'>
        <img src="/img/linkedin.png" alt='LinkedIn' />
      </a>
      <a href='https://x.com/micky_shark'>
        <img src="/img/twitter.png" alt='Twitter' />
      </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Carlos Miguel</strong>
</footer>
}

export default Footer