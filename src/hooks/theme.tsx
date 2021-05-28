import React, {createContext,useState,useContext} from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';


interface IThemeContext {
    alterarTheme(): void;
    theme: ITheme;
}

interface ITheme{
    title: string;

    colors:{
        primary: string;
        secundary: string
        tertiary: string;


        white: string;
        black: string;
        gray: string;

        sucess: string;
        info: string;
        corMenu: string;
        warning: string;
        filtro: string;
        filtroVerde: string;

    }
}


const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children}) => {
    const [theme, setTheme] = useState<ITheme>(dark);

    const alterarTheme = () => {
        if(theme.title === 'dark'){
            setTheme(light);
        }else {
            setTheme(dark);
        }
    }

    return (
        <ThemeContext.Provider value = {{ alterarTheme , theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext{
    const context = useContext(ThemeContext);
    return context;
}

export {ThemeProvider, useTheme};