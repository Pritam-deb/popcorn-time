import { Wrapper, Context, Text } from "./HeroImage.styles";

const HeroImage = ({image, title, text}) => {
    <Wrapper image={image}>
        <Context>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Context>
    </Wrapper>
};

export default HeroImage;