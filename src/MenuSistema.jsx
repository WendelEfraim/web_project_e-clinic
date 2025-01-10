import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function MenuSistema (props) {

return(
    <>
        <Menu inverted>
            
            <Menu.Item
                content='Chatbot'
                active={props.tela === 'chatbot'}
                as={Link}
                to='/chatbot'
            />

            <Menu.Item
                content='Especialidades'
                active={props.tela === 'especialidades'}
                as={Link}
                to='/especialidades'
            />            
            <Menu.Item
                content='Médicos'
                active={props.tela === 'medicos'}
                as={Link}
                to='/medicos'
            />            
            <Menu.Item
                content='Pacientes'
                active={props.tela === 'pacientes'}
                as={Link}
                to='/pacientes'
            />            
            <Menu.Item
                content='Encerrar sessão'
                active={props.tela === 'encerrar_sessão'}
                as={Link}
                to='/encerrar_sessão'
            />            
        </Menu>
    </>
)
}
