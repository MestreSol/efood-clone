import React from 'react'
import { TagContainer, TagTitle } from './style'
type Props = {
  text: string
}

const Tag: React.FC<Props> = ({ text }) => {
  return (
    <TagContainer>
      <TagTitle>{text}</TagTitle>
    </TagContainer>
  )
}

export default Tag
