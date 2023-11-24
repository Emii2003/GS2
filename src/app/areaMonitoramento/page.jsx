
import './areaRestrita.css';

export default function AreaUsuario(){
    return(
        <div className='area_usuario_container'>
            <div className='background_nav'>
                <p>Olá, fulano</p>
            </div>

                <form className='form_area_monitoramento'>
                    <div className='content_form'>
                        <h1>Monitoramento</h1>

                        <div className="form-group">
                            <label htmlFor="number">Qual a quantidade de consumo diário?</label>
                            <input type="number" id="number" name="number" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Qual data estimada você começou a consumir?</label>
                            <input type="date" id="date" name="date" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Qual data estimada você consumiu pela ultima vez ou consome?</label>
                            <input type="date" id="date" name="date" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="text">Qual o tipo de substância?</label>
                            <input type="text" id="date" name="date" />
                        </div>

                        <button type="submit">Enviar</button>
                    </div>
                </form>
        </div>
    )
}