import { motion } from 'framer-motion';
import { useState } from 'react';
import "./cardProjeto.css";

export default function CardProjeto(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div className={isOpen ? "card aberto" : "card"} onClick={() => setIsOpen(!isOpen)}>
            <motion.img className="logo-projeto" alt="simbolo de uma pasta" src={props.img}></motion.img> 
            
            {!isOpen && (
                <><motion.h2 className="card-titulo">{props.titulo}</motion.h2>
                <motion.p className="card-descricao">{props.descricao}</motion.p></>)}
                
            {isOpen && (
                <><motion.h2 className="card-titulo">{props.titulo} → {props.status}</motion.h2>
                <motion.div>
                    <p className='card--texto__expandido'>{props.expandido}</p>
                    <div className='card--texto__envolvidos'>
                        <p className='card--texto__expandido'>{props.tecnologias} </p>
                        <p className='card--texto__expandido'></p>
                    </div>
                </motion.div></>
            )}
        </motion.div>
    )
}