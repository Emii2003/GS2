import Image from 'next/image';
import './areaMetas.css';

export default function AreaUsuario(){
    return(
        <div>
            <div className='background_nav'>
                <p>Olá, fulano</p>
            </div>

                <form className='form_area_monitoramento'>
                        <h1>Metas</h1>

                        <div className="form-group">
                            <label htmlFor="number">Qual a quantidade que você pretende consumir em média diária?</label>
                            <input type="number" id="number" name="number" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Qual data de início da meta?</label>
                            <input type="date" id="date" name="date" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Qual data final da meta?</label>
                            <input type="date" id="date" name="date" />
                        </div>
                        <button type="submit">Enviar</button>
                </form>
        </div>
    )
}