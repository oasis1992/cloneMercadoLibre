import { useRouter } from 'next/router'
import Main from 'components/organims/Main'

const Home = () => {
    const router = useRouter()
    const { search } = router.query

    return (
        <Main
            initialSearchValue={search}
            title="Buscador Clone Mercado Libre"
            description="En Clone Mercado Libre puedes buscar productos y agregarlos a tu carrito de compras."
        />
    )
}

export default Home
