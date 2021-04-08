import React from 'react';
import logoImg from '../../assets/logo.svg';
import {MdDashboard,MdArrowDownward,MdArrowUpward,MdMoneyOff,MdAttachMoney} from 'react-icons/md';
import {BiExit} from 'react-icons/bi';
import {RiDashboardLine} from 'react-icons/ri';




import {Container, Header, LogImg, MenuContainer, MenuItemLink,Title } from './styles';

const Menu: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="meu dashboard" />
                <Title>Teste Dashboard!</Title>

            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard" >
                    
                    <RiDashboardLine/>
                        Dashboard
                </MenuItemLink>

                <MenuItemLink href="/pag_Show/entrada">
                    <MdAttachMoney/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/pag_Show/saida">
                    <MdMoneyOff/>
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="#" >
                    <BiExit/>
                    Sair
                </MenuItemLink>


            </MenuContainer>
        </Container>
    );
}

export default Menu;