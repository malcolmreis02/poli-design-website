import './seven.css'
import React, { useState } from 'react'

export const Seven = () => {


    const [nome, setNome] = useState('')
    const [servico, setServico] = useState('')

    var link = `https://api.whatsapp.com/send?phone=5519997795626&text=Ol%C3%A1!!%20Meu%20nome%20%C3%A9%20${nome}%20e%20eu%20gostaria%20de%20produzir%20alguns%20${servico}%20com%20voc%C3%AA%20e%20queria%20saber%20quanto%20iria%20ficar.`




    return(

        <div className='seven-main'>
            <div className='seven-content'>
                <div className='seven-title'>
                    <p>FAÇA SUA ARTE VISUAL COMIGO!</p>
                    <p>SEU PANFLETO OU CARTÃO DE VISITA TEM QUE SE COMUNICAR COM O CLIENTE DO MESMO JEITO QUE VOCÊ SE COMUNICA, EU GARANTO ISSO PARA VOCÊ</p>
                    <small className='text-muted'>PREENCHA ESSE FORMULÁRIO E ME CHAME NO WHATSAPP</small>
                </div>

                <div className='formulario'>
                    <form>

                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="text" className="form-control opacity-75" onChange={(event)=>(setNome(event.target.value))} id="floatingInputGrid" value={nome}/>
                                <label htmlFor="floatingInputGrid">Meu nome é:</label>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Serviços</label>
                                <select className="form-select opacity-75" id="inputGroupSelect01" onChange={(event)=>(setServico(event.target.value))} value={servico} >
                                    <option defaultValue={''}>E eu gostaria de produzir um:</option>
                                    <option value="cartazes">Cartaz</option>
                                    <option value="panfletos">Panfleto</option>
                                    <option value="cartões">Cartão de visita</option>
                                    <option value="posts">Post para o Instagram</option>
                                    <option value="camisetas">Camisetas personalizadas</option>
                                    <option value="logos">Logo da empresa</option>
                                </select>
                        </div>
                        <a href={link} className="btn btn-outline-success btn-lg enabled" tabIndex="-1" role="button" aria-disabled="true">Fazer orçamento...</a>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
