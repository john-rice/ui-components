const baseColors = {
  dark1: '#0B1015', // body bg
  dark2: '#17202A', // nav bg
  dark3: '#707070',
  dark4: '#1C232B', // card bg
  dark5: '#2D353E',
  text1: '#FFFFFF',
  text2: '#D4D4D5',
  text3: '#BBBDBF',
  text4: '#D4D4D5',
  text5: '#A3A6A9',
};

const baseFontSizes = {
  small: '12px',
  medium: '16px',
  large: '18px',
};

const theme = {
  colors: {
    ...baseColors,
    primary: '#db247c', // pink
    secondary: '#db247c', // blue
    topNavBg: '#14171b',
    sideNavBg: '#17202a',
    blackBg: '#0b1015',
    widgetBg: '#1c232b',
    tableRowBorderColor: '#cee3f921',
    grayBorder: '#2e363e',
    statusGreen: '#70ffd0',
    statusRed: '#ff7285',
    statusSuccess: '#41bc94', // RGB independent success color
    statusDanger: '#db247c',
    textColor: '#ffffff',
    subTextColor: '#bbbdbf',
    maskColor: 'rgba(0, 0, 0, 0.7)',
    checkboxOutline: '#9d9e9f',
    chartText: '#A8ACAD',
  },
  fontSizes: {
    ...baseFontSizes,
    baseFontSize: '14px',
    header: baseFontSizes.large,
    listItemFontSize: '15px',
    listItemSecondaryFontSize: '14px',
  },
};

export default theme;
