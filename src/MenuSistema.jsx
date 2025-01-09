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
        </Menu>
    </>
)
}
