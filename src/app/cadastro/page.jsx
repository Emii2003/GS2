import './cadastro.css';

export default function Cadastro(){
  return (
    <div className="cadastro_container">
      <div className="div_esquerda">
        <div className='textbox'>
        <p>Sua</p>
        <p>Plataforma</p>
        <p>De saúde</p>
        </div>
        
      </div>
      <div className="div_direita">
        <form className='form_cadastro'>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>

            <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" />
            </div>

            <div className="form-group">
                <label htmlFor="nome">Senha</label>
                <input type="password" id="Senha" name="Senha" />
            </div>

            <div className="form-group">
                <label htmlFor="nome">Data de nascimento</label>
                <input type="date" id="dt_nascimento" name="dt_nascimento" />
            </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
