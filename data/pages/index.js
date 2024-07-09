import global from "./global";
import galeria from "./galeria";

const getPageContext = ( page ) => {
    let pageVariables = {};
    switch ( page ) {
        case '/galeria.html':
            pageVariables = galeria;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
}

export default getPageContext;