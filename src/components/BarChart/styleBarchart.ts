import styled from 'styled-components'


interface ILegendPropriedades{
    color: string;
}

export const Container = styled.div`
    width: 48%;
    min-height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    display: flex;
    

`;

export const LadoEsquerdo = styled.aside`
    flex: 1;

    padding: 30px 10px;

    > h2 {
        padding-left: 16px;
        margin-bottom: 10px
    }

`;

export const LegendContainer  = styled.ul`
    list-style: none;
    height: 175px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secundary};
        border-radius: 10px;

    }


    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};

    }

`;

export const Legend  = styled.li<ILegendPropriedades>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    
    > div {
        background-color: ${prosp => prosp.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 14px;
        line-height: 40px;
        padding-left: 16px;
        text-align: center;
        padding-left: 16px;

    }

    > span {
        margin-left: 5px;
    }
`;
export const LadoDireito = styled.main`
    flex: 1;
    min-height: 150px;
    display: flex;
    justify-content: center;
    padding-top: 35px;


`;
