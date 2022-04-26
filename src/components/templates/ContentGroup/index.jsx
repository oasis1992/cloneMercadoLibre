import { Container, ContentGroupStyled, HeaderContentGroup } from './style'

const ContentGroup = ({ header, children, padding }) => (
    <Container>
        {header && (
            <HeaderContentGroup>
                {header}
            </HeaderContentGroup>
        )}

        <ContentGroupStyled padding={padding}>
            {children}
        </ContentGroupStyled>
    </Container>
)

export default ContentGroup
