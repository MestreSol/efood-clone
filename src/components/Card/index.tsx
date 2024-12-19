import Tag from '../Tag'

import {
  Title,
  Text,
  Icon,
  CardHeader,
  CardContent,
  CardImage,
  CardContainer,
  ContainerTags,
  Cover,
  Button
} from './style'

type Props = {
  card: 'primary' | 'second'
  kindButton: 'button' | 'link'
  title: string
  cover: string
  description: string
  nameButton: string
  iconName?: string
  rating?: string
  tagType?: string[]
  tagHighlight?: boolean
  to?: string
  handleClick?: () => void
}

const Card = ({
  card = 'primary',
  kindButton = 'link',
  title,
  cover,
  description,
  iconName,
  rating,
  nameButton,
  tagType,
  tagHighlight,
  to,
  handleClick
}: Props) => {
  // Function to render the button based on its type
  function renderTypeButton() {
    return (
      <Button
        kind={kindButton}
        placeholder={nameButton}
        onClick={kindButton === 'button' ? handleClick : undefined}
        to={kindButton === 'link' ? to : undefined}
        displayMode={card === 'primary' ? 'inlineBlock' : 'fullWidth'}
        themeMode={card}
      />
    )
  }

  // Function to render tags based on type and highlight
  function renderTags() {
    if (tagType && tagHighlight) {
      return (
        <ContainerTags>
          <Tag text="Destaque da semana" />
          {tagType?.map((tag, index) => <Tag key={index} text={tag} />)}
        </ContainerTags>
      )
    }

    return (
      <ContainerTags>
        {tagType?.map((tag, index) => <Tag key={index} text={tag} />)}
      </ContainerTags>
    )
  }

  return (
    <CardContainer $card={card}>
      <CardImage $card={card}>
        <Cover src={cover} alt={cover} />
      </CardImage>

      <CardContent $card={card}>
        <CardHeader>
          <Title $card={card}>{title}</Title>

          <CardHeader>
            {rating && <Title $card={card}>{rating}</Title>}
            {iconName && <Icon src={iconName} alt={iconName} />}
          </CardHeader>
        </CardHeader>

        <Text $card={card}>{description}</Text>

        {renderTypeButton()}
      </CardContent>

      {tagType && renderTags()}
    </CardContainer>
  )
}

export default Card
