import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

import api from '../../services/api'
import Contacts from '../contacts'
import Input from '../input'
import styles from './styles.module.css'

const SideContent: React.FC = () =>{
    const homePage = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] =useState('')
    const [whatsapp, setWhatsapp] = useState('')
    
   
    const handleSubmitContact =(event: FormEvent)=>{
        event.preventDefault()
       
        api.post('users', {
            name,
            email,
            whatsapp: String(whatsapp)
        }).then((res)=>{
            console.log(res)
            res.statusText
            alert('Contato enviado com Sucesso!')
            
        }).then(()=>{
            homePage.push('/')
            setTimeout("location.href = '/';",1000);
        }).catch(()=>{
            alert('Erro ao enviar Contato')
            homePage.push('/')
            setTimeout("location.href = '/';",1000);
        })
    }
    return (
        <div id={styles.masterhead}>
            <div id={styles.masterhead_content}>
                <div id={styles.masterhead_bg} > </div>
                <div id={styles.logo}>
                    <img src="/img/logo.png" alt="PHD Representações"/>
                </div>
                <div className={styles.content} >                    
                    <div>
                        <h2>Vem aí a melhor solução para sua empresa economizar e fazer uma melhor gestão e manutenção de suas instalações!</h2>
                        <p>Estamos passando por alguns ajustes em nosso site, em breve teremos uma versão mais moderna e otimizada, sempre visando trazer a melhor experiência para nossos clientes e parceiros. 
                        E para você que ainda não conhece a PHD Representações, somos uma empresa de consultoria especializada em soluções para sua empresa obter melhor custo beneficio na manutenção de suas instalações fabris e soluções em energia solar. Saiba mais se cadastrando para receber uma apresentação e solicitar o nosso contato.
                        </p> 
                        <form onSubmit={handleSubmitContact} method="post">
                            <p>Todos so campos são obrigatórios!</p>
                            <Input
                                 type="text"
                                 placeholder="Nome"
                                 name="name"
                                 onChange={(e)=>{setName(e.target.value)}}
                            />
                            <Input
                                 type="email"
                                 placeholder="Email"
                                 name="email"
                                 onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            <Input
                                 type="number"
                                 placeholder="WhatsApp"
                                 name="whatsapp"
                                 onChange={(e)=>{setWhatsapp(e.target.value)}}
                            />
                            <button type="submit">enviar</button>
                        </form>
                        <div>
                            <Contacts />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideContent