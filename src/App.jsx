import { useState } from 'react';
import './App.scss';
import sendEmail from './services/email';

function App() {
  const [emailData, setEmailData] = useState({
    nome: '',
    contato: '',
    mensagem: '',
  });

  return (
    <>
      <header>
        <h1>Leonardo Per. Tavares</h1>
        <nav>
          <ul class="cabecalho-lista">
            <li>
              <a href="#conteudo-home">Home</a>
            </li>
            <li>
              <a href="#conteudo-projetos">Projetos</a>
            </li>
            <li>
              <a href="#conteudo-habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#conteudo-contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="conteudo-home" id="conteudo-home">
          <div>
            <h2 class="home-titulo">Sobre mim</h2>
            <p>
              Sou um programador apaixonado por tecnologia, e tenho foco na área
              de desenvolvimento web fullstack.
            </p>
          </div>
          <div>
            <img
              src="../public/ux.jpg"
              alt="Desenvolvendo experiência de usuário"
            />
            <img
              src="../public/development.png"
              alt="Desenvolvendo software/site"
            />
            <img src="../public/code.jpg" alt="Desenvolvendo código jQuery" />
          </div>
        </section>
        <section class="conteudo-projetos" id="conteudo-projetos">
          <div>
            <h2>Projetos</h2>
            <p>Meus principais projetos como desenvolvedor web</p>
          </div>
          <ul class="projetos-lista">
            <li>
              <div>
                <h3>Github Profiler</h3>
                <div class="projeto-techs">
                  <img src="../public/bootstrap.png" alt="Bootstrap" />
                  <img src="../public/css-3.png" alt="CSS3" />
                  <img src="../public/html-5.png" alt="HTML5" />
                  <img src="../public/js.png" alt="javaScript" />
                  <img src="../public/reactjs.png" alt="ReactJS" />
                  <img src="../public/sass.png" alt="SASS" />
                </div>
              </div>
              <a className='projeto-link' href="https://portifolio-livid-pi.vercel.app/">
                <img src="../public/github-profiler.png" alt="Projeto" />
              </a>
              <a href="">Ver projeto</a>
            </li>
            <li>
              <div>
                <h3>Título do projeto</h3>
                <div class="projeto-techs">
                  <img src="../public/bootstrap.png" alt="Bootstrap" />
                  <img src="../public/css-3.png" alt="CSS3" />
                  <img src="../public/html-5.png" alt="HTML5" />
                  <img src="../public/js.png" alt="javaScript" />
                  <img src="../public/reactjs.png" alt="ReactJS" />
                  <img src="../public/sass.png" alt="SASS" />
                </div>
              </div>
              <a className='projeto-link' href="#">
                <img src="https://placehold.co/300x300" alt="Projeto" />
              </a>
              <a href="">Ver projeto</a>
            </li>
            <li>
              <div>
                <h3>Título do projeto</h3>
                <div class="projeto-techs">
                  <img src="../public/bootstrap.png" alt="Bootstrap" />
                  <img src="../public/css-3.png" alt="CSS3" />
                  <img src="../public/html-5.png" alt="HTML5" />
                  <img src="../public/js.png" alt="javaScript" />
                  <img src="../public/reactjs.png" alt="ReactJS" />
                  <img src="../public/sass.png" alt="SASS" />
                </div>
              </div>
              <a className='projeto-link' href="#">
                <img src="https://placehold.co/300x300" alt="Projeto" />
              </a>
              <a href="">Ver projeto</a>
            </li>
            <li>
              <div>
                <h3>Título do projeto</h3>
                <div class="projeto-techs">
                  <img src="../public/bootstrap.png" alt="Bootstrap" />
                  <img src="../public/css-3.png" alt="CSS3" />
                  <img src="../public/html-5.png" alt="HTML5" />
                  <img src="../public/js.png" alt="javaScript" />
                  <img src="../public/reactjs.png" alt="ReactJS" />
                  <img src="../public/sass.png" alt="SASS" />
                </div>
              </div>
              <a className='projeto-link' href="#">
                <img src="https://placehold.co/300x300" alt="Projeto" />
              </a>
              <a href="">Ver projeto</a>
            </li>
          </ul>
        </section>
        <section class="conteudo-habilidades" id="conteudo-habilidades">
          <h4>Habilidades</h4>
          <h2>Habilidades e Tecnologias que eu uso</h2>
          <ul class="lista-habilidades">
            <li>
              <img src="../public/bootstrap.png" />
              <span>Bootstrap</span>
            </li>
            <li>
              <img src="../public/css-3.png" />
              <span>CSS3</span>
            </li>
            <li>
              <img src="../public/firebase.png" />
              <span>FireBase</span>
            </li>
            <li>
              <img src="../public/html-5.png" />
              <span>HTML5</span>
            </li>
            <li>
              <img src="../public/jquery.png" />
              <span>jQuery</span>
            </li>
            <li>
              <img src="../public/js.png" />
              <span>JavaScript</span>
            </li>
            <li>
              <img src="../public/mongodb.png" />
              <span>MongoDB</span>
            </li>
            <li>
              <img src="../public/nodejs.png" />
              <span>NodeJS</span>
            </li>
            <li>
              <img src="../public/postgre.png" />
              <span>PostgreSQL</span>
            </li>
            <li>
              <img src="../public/reactjs.png" />
              <span>ReactJS</span>
            </li>
            <li>
              <img src="../public/redux.png" />
              <span>React Redux</span>
            </li>
            <li>
              <img src="../public/sass.png" />
              <span>SASS</span>
            </li>
          </ul>
        </section>
        <section class="conteudo-contato" id="conteudo-contato">
          <div class="email-contato">
            <div>
              <h2>Deseja entrar em Contato?</h2>
              <p>Envie um e-mail para mim através do formulário.</p>
            </div>
            <form onSubmit={() => sendEmail(emailData)} id="form-contato">
              <div>
                <input onChange={(e) => setEmailData({ ...emailData, nome: e.target.value })}
                  id="nome"
                  type="text"
                  placeholder="Seu nome ou empresa"
                />
                <input onChange={(e) => setEmailData({ ...emailData, contato: e.target.value })}
                  id="contato"
                  type="text"
                  placeholder="Seu e-mail ou número para contato"
                />
              </div>
              <textarea onChange={(e) => setEmailData({ ...emailData, mensagem: e.target.value })} id="mensagem" placeholder="Sua mensagem"></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div class="info-contato">
            <h3>Informações de contato</h3>
            <p>
              Você também pode entrar em contato comigo através dos seguintes
              links e redes sociais.
            </p>
            <div>
              <h5>Email</h5>
              <span>lptleo11@gmail.com</span>
              <h5>Linkedin</h5>
              <span>https://www.linkedin.com/in/leo-dev/</span>
              <h5>Whatsapp</h5>
              <span>+55 (92) 99183-4382</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
