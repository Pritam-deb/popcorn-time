import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import {
    Wrapper, Content, LogoImg, TMBDLogoImg
} from './Header.styles'

const Header = () => {
    return(
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
                <TMDBLogo src={TMBDLogoImg} alt='tmbd-logo'/>
            </Content>
        </Wrapper>
    )
}

export default Header;