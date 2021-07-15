import React from "react"
import { Container, Item, Inner, Title, SubTitle, Image, Pane } from './styles/jumbotron';

export default function jumbotron ({children, direction = "row", ...restProps}) {
    return (
        <Item {...restProps}>
            <Inner direction={direciton}>{children}</Inner>
        </Item>
    )
}

export function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

export function JumbotronSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

export function JumbotronImage({children, ...restProps}) {
    return <Image {...restProps} />
}

export function JumbotronPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}