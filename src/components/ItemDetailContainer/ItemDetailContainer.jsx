import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDitail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById (itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
    
}

export default ItemDetailContainer