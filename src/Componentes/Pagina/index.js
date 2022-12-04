import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiLinktree } from 'react-icons/si';




import './index.css'
import Logo from './img/Logo.png'
import Video from './img/video.mp4'
import Inovalem from './img/LogoIno.png'
import Visumei from './img/LogoVisu.png'
import Tc from './img/LogoTc.png'
import Code from './img/QRcode.svg'
import Celular from './img/Celular.png'
import Estilo from './img/Estilo.svg'
import Teste from './img/teste.jpg'
import Cliente from './img/Cliente.png'
import Empre from './img/Empre.png'

export function Pagina() {
    return (

        <div>
            <header>
                <nav className="navigation">
                    <div className="Logo">
                        <img className="img" src={Logo} />
                        <a className="Nome" href="#"><span>Um</span>Estilo</a>
                    </div>
                    <div className="Botao">
                        <a href='#'>Sobre</a>
                        <a href='#'>Atendimento</a>
                        <a href="#">Cadastre-se </a>
                    </div>
                </nav>
            </header>
            <section className="BlocoUm">
                <div>
                    <img class="celular" src={Celular} alt="" />
                    <video className="Video" src={Video} alt="" loop autoPlay muted />
                </div>
                <div className="Login">
                    <a href="#" className="btn">Login</a>
                    <p>Conheça um novo <span class="span" style={{ color: "#ff5500", fontFamily: "font-family: 'Miniver'" }}>Estilo</span></p>
                </div>
            </section>

            <section className="BlocoDois">
                <div className="txtUm">
                    <h1 className="tituUm">Quem é a <span>Um</span>Estilo?</h1>
                    <p>Somos uma rede de divulgação de MEI`s (Microempreendedores Individuais)</p> <p> do ramo de Estética de rápido consumo<p>com foco em oferecer a visibilidade para empreendedores da periferia.</p></p>
                </div>
                <div className="txtDois">
                    <h1 className="tituDois">Como funcionamos</h1>
                    <p>O empreendedorismo no Brasil vem crescendo e gerando empregos e novas fontes de renda aos brasileiros,<p> entretanto,na mesma proporção que se criam novos empreendimentos</p></p><p>são desfeitos alguns empreendimentos por falta de clientes, falta de visibilidade no mercado.</p><p>Nós da Um Estilo  queremos que os empreendedores consigam manter o seu negócio no mercado.</p><p> Queremos que você,  empreendedor, compartilhe seu sonho - seu negócio - com estilo.</p>
                </div>

            </section>

            <section>
                <div className='Cliente'>
                    <img src={Cliente}></img>
                    <div className='textCliente'>
                        <p className='Titulo'>Venha ser <span>estiloso</span> também</p>
                        <div className='Para'>
                            <p className='pUm'>Faça o seu cadastro e ache o estilo</p>
                            <p className='pDois'>que mais te representa</p>
                        </div>
                        <button className='btnCliente' type='button'>Encontre o <span>seu estilo</span></button>
                    </div>
                </div>

                <div className='Empre'>
                    <img src={Empre}></img>
                    <div className='textEmpre'>
                        <p className='Titulo'>Mostre o seu <span>trabalho</span> ao <span> mundo</span></p>
                        <div className='Para'>
                            <p className='pUm'>Com sua conta empreendedor você pode mostrar</p>
                            <p className='pDois'>o seu trabalho de uma forma estilosa</p>
                        </div>
                        <button className='btnEmpre' type='button'>Empreenda com <span>a gente</span></button>
                    </div>

                </div>
            </section>




            <section className="BlocoParc">
                <div className="Parcerias">
                    <h1>Parcerias</h1>
                </div>
                <div className="Logomarcas">
                    <div className="Inovalem">
                        <img src={Inovalem} />
                        <p>Inovalem</p>
                    </div>
                    <div className="Visumei">
                        <img src={Visumei} />
                        <p>Visumei</p>
                    </div>
                    <div className="Tc">
                        <img src={Tc} alt="tc" />
                        <p>Fundação T&C</p>
                    </div>
                </div>
            </section>
            <section className="Footer">
                <div className="LogoFooter">
                    <img className="img" src={Logo} alt="" />
                    <h1 class="nome_footer"><span>Um</span>Estilo</h1>
                    <h3>Oportunidade, visão e estilo</h3>
                    <div className='redes'>
                        <ul>
                            <a href="https://linktr.ee/umestiloproa"><SiLinktree className="icon" /></a>
                            <a href="https://linktr.ee/umestiloproa"><AiFillGithub className="icon" /></a>
                            <a href="https://linktr.ee/umestiloproa"><AiFillLinkedin className="icon" /></a>
                        </ul>
                    </div>
                </div>

                <div className='opcSobre'>
                    <h1>Sobre</h1>
                    <p>Sobre a UmEstilo</p>
                    <p>Trabalhe conosco</p>
                </div>
                <div className='opcAtendi'>
                    <h1>Atendimento</h1>
                    <p>Perguntas frequentes</p>
                    <p>Entre em contato</p>

                </div>


            </section>
        </div>



    )
}