const selectedPallete = 5

const primaryColors = [
  '#7469B6',
  '#1E0342',
  '#7469B6',
  '#71C9CE',
  '#112D4E',
  '#3E8E7E',
  '#B3C8CF',
  '#7469B6',
  '#6264d5',
  '#',
  '#'
]
const secondaryColors = [
  '#AD88C6',
  '#0E46A3',
  '#AD88C6',
  '#A6E3E9',
  '#3F72AF',
  '#7CD1B8',
  '#BED7DC',
  '#AD88C6',
  '#',
  '#',
  '#'
]
const thirdColors = [
  '#E1AFD1',
  '#9AC8CD',
  '#E1AFD1',
  '#CBF1F5',
  '#DBE2EF',
  '#FABB51',
  '#F1EEDC',
  '#E1AFD1',
  '#',
  '#',
  '#'
]
const fourthColors = [
  '#FFE6E6',
  '#E1F7F5',
  '#FFE6E6',
  '#E3FDFD',
  '#F9F7F7',
  '#FAEDC6',
  '#E5DDC5',
  '#FFE6E6',
  '#',
  '#'
]

const primaryColor = primaryColors[selectedPallete]
const secondaryColor = secondaryColors[selectedPallete]
const thirdColor = thirdColors[selectedPallete]
const fourthColor = fourthColors[selectedPallete]

export { primaryColor, secondaryColor, thirdColor, fourthColor, greyColor }

function greyColor(opacity: number) {
  return `rgb(100,100,100,${opacity / 100})`
}
