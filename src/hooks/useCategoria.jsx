import { useContext } from 'react'
import CategoriasContext from '../context/categoriasProvider'

const useCategorias = () => {
    return useContext(CategoriasContext)
}

export default useCategorias