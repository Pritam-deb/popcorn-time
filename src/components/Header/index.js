import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import {
    Wrapper, Content, LogoImg, TMDBLogoImg
} from './Header.styles'

const Header = () => {
    return(
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
                <TMDBLogoImg src={TMDBLogo} alt='tmbd-logo'/>
            </Content>
        </Wrapper>
    )
}

export default Header;