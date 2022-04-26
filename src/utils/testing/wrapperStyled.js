import { render } from '@testing-library/react'
import App from '../../pages/_app'

const wrapperStyled = (component, props = {}) => render(
    <App Component={component} pageProps={props} />,
)

export default wrapperStyled
