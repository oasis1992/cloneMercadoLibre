import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import SearchBar from '../SearchBar'
import { MainStyled } from './style'

const Main = ({
    children,
    initialSearchValue = '',
    title,
    description,
    url,
    noIndex = false,
}) => {
    const router = useRouter()
    const [valueSearch, setValueSearch] = useState(initialSearchValue)

    const handleSubmit = () => {
        if (initialSearchValue === valueSearch) {
            return
        }
        router.push(`/items?search=${valueSearch}`)
    }

    const handleSearchChange = (value) => {
        setValueSearch(value)
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_FRONTEND_URL}${url || ''}`} />
                <meta property="og:type" content="website" />
                {noIndex && (
                    <>
                        <meta key="robots" name="robots" content="noindex,nofollow" />
                        <meta key="googlebot" name="googlebot" content="noindex,nofollow" />
                    </>
                )}
            </Head>
            <MainStyled>
                <SearchBar
                    onSubmit={handleSubmit}
                    value={valueSearch}
                    onChange={handleSearchChange}
                />
                {children}
            </MainStyled>
        </>
    )
}

export default Main
