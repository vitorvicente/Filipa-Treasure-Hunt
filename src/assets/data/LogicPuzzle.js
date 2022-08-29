const LOGIC_PUZZLE_DATA_GUESSABLES = [ {
  id: "X4Y1",
  x: 0,
  y: 3,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X1Y1", "X2Y1", "X3Y1", "X4Y2", "X4Y3", "X4Y4" ]
}, {
  id: "X3Y2",
  x: 1,
  y: 2,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X3Y1", "X3Y3", "X3Y4", "X1Y2", "X2Y2", "X4Y2" ]
}, {
  id: "X2Y3",
  x: 2,
  y: 1,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X2Y1", "X2Y2", "X2Y4", "X1Y3", "X3Y3", "X4Y3" ]
}, {
  id: "X1Y4",
  x: 3,
  y: 0,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X1Y1", "X1Y2", "X1Y3", "X2Y4", "X3Y4", "X4Y4" ]
}, {
  id: "X2B1",
  x: 4,
  y: 1,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X1B1", "X3B1", "X4B1", "X2B2", "X2B3", "X2B4" ]
}, {
  id: "X4B2",
  x: 5,
  y: 3,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X1B2", "X2B2", "X3B2", "X4B1", "X4B3", "X4B4" ]
}, {
  id: "X1B3",
  x: 6,
  y: 0,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X2B3", "X3B3", "X4B3", "X1B1", "X1B2", "X1B4" ]
}, {
  id: "X2B3", x: 6, y: 1, color: "#ff0000", status: false, guesseable: true, alsoColor: []
}, {
  id: "X3B4",
  x: 7,
  y: 2,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X3B1", "X3B2", "X3B3", "X1B4", "X2B4", "X4B4" ]
}, {
  id: "X3A1",
  x: 8,
  y: 2,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X3A2", "X3A3", "X3A4", "X1A1", "X2A1", "X4A1" ]
}, {
  id: "X1A2",
  x: 9,
  y: 0,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X1A1", "X1A3", "X1A4", "X2A2", "X3A2", "X4A2" ]
}, {
  id: "X4A3",
  x: 10,
  y: 3,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X4A1", "X4A2", "X4A4", "X1A3", "X2A3", "X3A3" ]
}, {
  id: "X2A4",
  x: 11,
  y: 1,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "X2A1", "X2A2", "X2A3", "X1A4", "X3A4", "X4A4" ]
}, {
  id: "A3Y1",
  x: 0,
  y: 6,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "A1Y1", "A2Y1", "A4Y1", "A3Y2", "A3Y3", "A3Y4" ]
}, {
  id: "A1Y2",
  x: 1,
  y: 4,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "A1Y1", "A1Y3", "A1Y4", "A2Y2", "A3Y2", "A4Y2" ]
}, {
  id: "A4Y3",
  x: 2,
  y: 7,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "A4Y1", "A4Y2", "A4Y4", "A1Y3", "A2Y3", "A3Y3" ]
}, {
  id: "A2Y4",
  x: 3,
  y: 5,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "A2Y1", "A2Y2", "A2Y3", "A1Y4", "A3Y4", "A4Y4" ]
}, {
  id: "A4B1",
  x: 4,
  y: 7,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "A1B1", "A2B1", "A3B1", "A4B2", "A4B3", "A4B4" ]
}, {
  id: "A3B2",
  x: 5,
  y: 6,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "A3B1", "A3B3", "A3B4", "A1B2", "A2B2", "A4B2" ]
}, {
  id: "A2B3",
  x: 6,
  y: 5,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "A1B3", "A3B3", "A4B3", "A2B1", "A2B2", "A2B4" ]
}, {
  id: "A1B4",
  x: 7,
  y: 4,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "A1B1", "A1B2", "A1B3", "A2B4", "A3B4", "A4B4" ]
}, {
  id: "B2Y1",
  x: 0,
  y: 9,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "B1Y1", "B3Y1", "B4Y1", "B2Y2", "B2Y3", "B2Y4" ]
}, {
  id: "B4Y2",
  x: 1,
  y: 11,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "B4Y1", "B4Y3", "B4Y4", "B1Y2", "B2Y2", "B3Y2" ]
}, {
  id: "B1Y3",
  x: 2,
  y: 8,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "B1Y1", "B1Y2", "B1Y4", "B2Y3", "B3Y3", "B4Y3" ]
}, {
  id: "B3Y4",
  x: 3,
  y: 10,
  color: "#00ff00",
  status: false,
  guesseable: true,
  alsoColor: [ "B3Y1", "B3Y2", "B3Y3", "B1Y4", "B2Y4", "B4Y4" ]
} ];

const LOGIC_PUZZLE_DATA_REDS = [ {
  id: "X1Y1", x: 0, y: 0, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X2Y1", x: 0, y: 1, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X3Y1", x: 0, y: 2, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X1Y2", x: 1, y: 0, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X2Y2", x: 1, y: 1, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X4Y2", x: 1, y: 3, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X1Y3", x: 2, y: 0, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X3Y3", x: 2, y: 2, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X4Y3", x: 2, y: 3, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X2Y4", x: 3, y: 1, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X3Y4", x: 3, y: 2, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X4Y4", x: 3, y: 3, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X1B1", x: 4, y: 0, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X3B1", x: 4, y: 2, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X4B1", x: 4, y: 3, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X1B2", x: 5, y: 0, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X2B2", x: 5, y: 1, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X3B2", x: 5, y: 2, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X3B3", x: 6, y: 2, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X4B3", x: 6, y: 3, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X1B4", x: 7, y: 0, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X2B4", x: 7, y: 1, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X4B4", x: 7, y: 3, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X1A1", x: 8, y: 0, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X2A1", x: 8, y: 1, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X4A1", x: 8, y: 3, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X2A2", x: 9, y: 1, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X3A2", x: 9, y: 2, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X4A2", x: 9, y: 3, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X1A3", x: 10, y: 0, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X2A3", x: 10, y: 1, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X3A3", x: 10, y: 2, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X1A4", x: 11, y: 0, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X3A4", x: 11, y: 2, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "X4A4", x: 11, y: 3, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A1Y1", x: 0, y: 4, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A2Y1", x: 0, y: 5, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A4Y1", x: 0, y: 7, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A2Y2", x: 1, y: 5, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A3Y2", x: 1, y: 6, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A4Y2", x: 1, y: 7, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A1Y3", x: 2, y: 4, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A2Y3", x: 2, y: 5, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A3Y3", x: 2, y: 6, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A1Y4", x: 3, y: 4, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A3Y4", x: 3, y: 6, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A4Y4", x: 3, y: 7, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A1B1", x: 4, y: 4, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A2B1", x: 4, y: 5, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A3B1", x: 4, y: 6, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A1B2", x: 5, y: 4, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A2B2", x: 5, y: 5, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A4B2", x: 5, y: 7, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A1B3", x: 6, y: 4, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A3B3", x: 6, y: 6, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A4B3", x: 6, y: 7, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A2B4", x: 7, y: 5, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A3B4", x: 7, y: 6, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "A4B4", x: 7, y: 7, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B1Y1", x: 0, y: 8, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B3Y1", x: 0, y: 10, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B4Y1", x: 0, y: 11, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B1Y2", x: 1, y: 8, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B2Y2", x: 1, y: 9, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B3Y2", x: 1, y: 10, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B2Y3", x: 2, y: 9, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B3Y3", x: 2, y: 10, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B4Y3", x: 2, y: 11, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B1Y4", x: 3, y: 8, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B2Y4", x: 3, y: 9, color: "#ea9999", status: false, guesseable: false, alsoColor: []
}, {
  id: "B4Y4", x: 3, y: 11, color: "#ea9999", status: false, guesseable: false, alsoColor: []
} ];

const LOGIC_PUZZLE_DATA_BLACKS = [ {
  id: "B1B1", x: 4, y: 8, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B2B1", x: 4, y: 9, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B3B1", x: 4, y: 10, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B4B1", x: 4, y: 11, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B1B2", x: 5, y: 8, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B2B2", x: 5, y: 9, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B3B2", x: 5, y: 10, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B4B2", x: 5, y: 11, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B1B3", x: 6, y: 8, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B2B3", x: 6, y: 9, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B3B3", x: 6, y: 10, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B4B3", x: 6, y: 11, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B1B4", x: 7, y: 8, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B2B4", x: 7, y: 9, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B3B4", x: 7, y: 10, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B4B4", x: 7, y: 11, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A1A1", x: 8, y: 4, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A2A1", x: 8, y: 5, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A3A1", x: 8, y: 6, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A4A1", x: 8, y: 7, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A1A2", x: 9, y: 4, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A2A2", x: 9, y: 5, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A3A2", x: 9, y: 6, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A4A2", x: 9, y: 7, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A1A3", x: 10, y: 4, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A2A3", x: 10, y: 5, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A3A3", x: 10, y: 6, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A4A3", x: 10, y: 7, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A1A4", x: 11, y: 4, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A2A4", x: 11, y: 5, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A3A4", x: 11, y: 6, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "A4A4", x: 11, y: 7, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B1A1", x: 8, y: 8, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B2A1", x: 8, y: 9, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B3A1", x: 8, y: 10, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B4A1", x: 8, y: 11, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B1A2", x: 9, y: 8, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B2A2", x: 9, y: 9, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B3A2", x: 9, y: 10, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B4A2", x: 9, y: 11, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B1A3", x: 10, y: 8, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B2A3", x: 10, y: 9, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B3A3", x: 10, y: 10, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B4A3", x: 10, y: 11, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B1A4", x: 11, y: 8, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B2A4", x: 11, y: 9, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B3A4", x: 11, y: 10, color: "#000", status: true, guesseable: false, alsoColor: []
}, {
  id: "B4A4", x: 11, y: 11, color: "#000", status: true, guesseable: false, alsoColor: []
} ];

export const LOGIC_PUZZLE_ALL = LOGIC_PUZZLE_DATA_GUESSABLES.concat(LOGIC_PUZZLE_DATA_REDS.concat(
  LOGIC_PUZZLE_DATA_BLACKS))

export const populateHeader = () => {
  const sideHeader = Array(12).fill({});

  sideHeader[0] = {
    main: "Target",
    secondary: "Y1",
    tertiary: "81211501148459477456",
    rowSpan: 4
  }
  sideHeader[1] = {
    main: "",
    secondary: "Y2",
    tertiary: "38609218967896818570"
  }
  sideHeader[2] = {
    main: "",
    secondary: "Y3",
    tertiary: "58449550188153273562"
  }
  sideHeader[3] = {
    main: "",
    secondary: "Y4",
    tertiary: "4378987829331356"
  }

  sideHeader[4] = {
    main: "Operative ID",
    secondary: "B1",
    tertiary: "101001",
    rowSpan: 4
  }
  sideHeader[5] = {
    main: "",
    secondary: "B2",
    tertiary: "100100"
  }
  sideHeader[6] = {
    main: "",
    secondary: "B3",
    tertiary: "11000"
  }
  sideHeader[7] = {
    main: "",
    secondary: "B4",
    tertiary: "10001"
  }

  sideHeader[8] = {
    main: "Time of Strike",
    secondary: "A1",
    tertiary: "February 10th",
    rowSpan: 4
  }
  sideHeader[9] = {
    main: "",
    secondary: "A2",
    tertiary: "February 28th"
  }
  sideHeader[10] = {
    main: "",
    secondary: "A3",
    tertiary: "March 3rd"
  }
  sideHeader[11] = {
    main: "",
    secondary: "A4",
    tertiary: "March 10th"
  }

  return sideHeader;
}