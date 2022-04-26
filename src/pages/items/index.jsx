import { useCallback, useMemo } from 'react'
import Error from 'next/error'
import CategoryThree from 'components/molecules/CategoryThree'
import ListItems from 'components/molecules/ListItems'
import ContentGroup from 'components/templates/ContentGroup'
import Main from 'components/organims/Main'
import { useRouter } from 'next/router'
import useSearchProducts from 'hooks/useSearchProducts'

const SearchPage = () => {
    const router = useRouter()
    const { search } = router.query
    const { data, loading, error } = useSearchProducts(search)

    const renderHeader = useMemo(() => {
        if (loading || !data) {
            return null
        }

        return <CategoryThree categories={data.categories} />
    }, [data, loading])

    const handleClickProduct = useCallback((productId) => {
        router.push(`/items/${productId}`)
    }, [router])

    const renderContent = useMemo(() => {
        if (loading || !data) {
            return 'Loading...'
        }

        if (!data.items.length) {
            return <h2>Not found items</h2>
        }

        return (
            <ContentGroup padding={16} header={renderHeader}>
                <ListItems dataTestId="listItems-ID" onClick={handleClickProduct} products={data.items} />
            </ContentGroup>
        )
    }, [data, handleClickProduct, loading, renderHeader])

    if (!search) {
        return <Error statusCode={400} />
    }

    if (error) {
        return <Error statusCode={error.statusCode} />
    }

    return (
        <Main
            initialSearchValue={search}
            noIndex
        >
            {renderContent}
        </Main>
    )
}

export default SearchPage
