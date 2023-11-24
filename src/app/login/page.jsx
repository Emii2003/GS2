import './login.css';
import Link from 'next/link';
import TextBox from '@/components/TextBoxForm/Textbox';

export default function Cadastro(){
  return (
    <div className="login_container">
      <div className="div_esquerda">
        <div className='textbox'>
        <p>Sua</p>
        <p>Plataforma</p>
        <p>De saúde</p>
        </div>
        
      </div>
      <div className="div_direita">
      <div className="button_section">
                <Link className="home_login" href={'/'}>Home</Link>
                <Link className="cadastro_login" href={'/cadastro'}>Cadastro</Link>
            </div>
        <form className='form_login'>
          <TextBox/>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" 
                // value={novo.email}
                //  onChange={handleChange}
                 />
            </div>

            <div className="form-group">
                <label htmlFor="nome">Senha</label>
                <input type="password" id="senha" name="senha" 
                // value={novo.senha}
                //  onChange={handleChange}
                 />
            </div>

            <button className= "button_form" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
