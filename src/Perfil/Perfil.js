import Logo from '../imagens/Logo.png'
import Moeda from '../imagens/ecoin.png'
import Foto from '../imagens/ftproa.png'
import Video from '../imagens/video.mp4'
import { AiFillHome } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import './Perfil.css'
import { Link } from 'react-router-dom';
export function Perfil() {
    return (
        <div id="Perfil">
            <header>
                <nav id="navigation">
                    <div id="Logo">
                        <img id="img" src={Logo} />
                        <a id="Nome" href="#"><span>Um</span>Estilo</a>
                    </div>

                    <div>
                        <input placeholder='Pesquisar' id="Pesquisar" />
                    </div>

                    <div id="Ecoin">
                        <img id="moeda" src={Moeda} />
                        <a id="Numeração">150</a>
                    </div>
                    <div id="Home">
                        <IconContext.Provider value={{ size: '30px' }}>

                            <Link to="/Plataforma"><a href='#'><AiFillHome /></a></Link>
                        </IconContext.Provider>
                    </div>
                </nav>
            </header>
            <section id="parteUm">
                <div id="junta" >
                    <div id="Perfil">
                        <img id="fotoPerfil" src={Foto} />
                    </div>

                    <div id='ladoPerfil'>
                        <p id="textoUm">Marcos Aquino</p>
                        <a id="btnEditar" href="#">Editar perfil</a>
                    </div>
                </div>
            </section>



            <div id='indicacoes'>
                <ul>
                    <li id="LiUm">Seguindo:10</li>
                    <li id="LiDois">Interessados:20</li>
                    <li id="LiTres">Contratações:10</li>
                </ul>
            </div>

            <div className='Descri'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non consequat justo. Maecenas efficitur id massa nec pulvinar.</p>
            </div>


            <section id="parteDois">
                <div className="Barra">
                    <ul>
                        <li id="linhaUm">Seus videos:</li>
                        <li id="linhaDois">Seus interesses:</li>
                    </ul>
                </div>
                <div id="Videos">
                    <video src={Video}></video>
                    <video src={Video}></video>
                    <video src={Video}></video>
                    <video src={Video}></video>
                    <video src={Video}></video>
                    <video src={Video}></video>
                </div>

            </section>
        </div>

    )
}

export default Perfil;