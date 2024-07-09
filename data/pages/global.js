const global = (path) => {
    return {
        menuOptions: getMenuWithActivePath(path)
    }
}

const getMenuWithActivePath = (path)=>{
    return [
        {
            label: 'Inicio',
            url: 'index.html',
            page: 'index'
        },
        {
            label: 'Galeria',
            url: 'galeria.html',
            page: 'galeria'
        }

    ].map( o => {
        return{
            ...o,
            active: path.includes(o.url)
        }
    } ) 
}

export default global;