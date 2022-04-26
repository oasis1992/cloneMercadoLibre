import { useMemo } from 'react'
import Error from 'next/error'
import axios from 'axios'
import CategoryThree from 'components/molecules/CategoryThree'
import Main from 'components/organims/Main'
import ProductDetail from 'components/organims/ProductDetail'
import ContentGroup from 'components/templates/ContentGroup'

const ProductDetailPage = ({ data, errorCode }) => {
    const renderCategories = useMemo(() => {
        if (!data) {
            return null
        }

        return <CategoryThree categories={data.categories} />
    }, [data])

    if (errorCode) {
        return <Error statusCode={errorCode} />
    }

    return (
        <Main
            title={data.title}
            description={data.title}
            url={`/items/${data.id}`}
        >
            <ContentGroup header={renderCategories}>
                <ProductDetail product={data.item} />
            </ContentGroup>
        </Main>
    )
}

export async function getServerSideProps(context) {
    let response
    let statusCode = 200
    try {
        response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/items/${context.query.id}`)
    } catch (e) {
        statusCode = e.response.status
    }

    return {
        props: {
            data: response?.data || null, errorCode: statusCode === 200 ? false : statusCode,
        },
    }
}

export default ProductDetailPage
