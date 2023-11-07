

const products = [
    {
        id:'1',
        name: 'Ichigo',
        price: 800,
        category: 'anime',
        img: '',
        stock: 20,
        description: 'Descripcion de Ichigo'
    },
    {
     id:'2',
     name:'Capitan America', 
     price: 1200, 
     category: 'marvel', 
     img:'', 
     stock: 10, 
     description:'descripcion del Capitan America'
    }
    
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (( ) => {
            resolve(products)
        }, 300)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
