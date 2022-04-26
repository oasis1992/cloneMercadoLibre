import { PLACE_HOLDER_INPUT_SEARCH } from 'utils/constants'
import Link from 'next/link'
import {
    Input,
    Header,
    WrapperInput,
    WrapperSearchIcon,
    Image,
    WrapperLogo,
} from './style'

const SearchBar = ({
    onSubmit,
    onChange,
    value,
}) => {
    const handleSubmit = () => {
        onSubmit(value)
    }

    return (
        <Header>
            <WrapperInput>
                <WrapperLogo>
                    <Link href="/">
                        <Image
                            alt="Logo Mercado libre"
                            title="Mercado libre"
                            src="/assets/Logo_ML.png"
                            srcSet="
                            /assets/Logo_ML.png 500w,
                            /assets/Logo_ML@2x.png 800w,
                            "
                            width={56}
                            height="100%"
                        />
                    </Link>
                </WrapperLogo>
                <Input
                    type="text"
                    value={value}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && onSubmit) {
                            handleSubmit(value)
                        }
                    }}
                    placeholder={PLACE_HOLDER_INPUT_SEARCH}
                    onChange={(e) => {
                        onChange(e.target.value)
                    }}
                />
                <WrapperSearchIcon onClick={handleSubmit}>
                    <Image
                        alt="search"
                        title="search"
                        src="/assets/ic_Search@2x.png"
                        srcSet="
                            /assets/ic_Search.png 500w,
                            /assets/ic_Search@2x.png 800w,
                        "
                        width={18}
                        height={18}
                    />
                </WrapperSearchIcon>
            </WrapperInput>
        </Header>
    )
}

export default SearchBar
