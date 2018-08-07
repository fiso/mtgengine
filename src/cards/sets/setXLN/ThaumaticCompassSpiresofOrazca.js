"use strict";
const Constants = require ("../../../Constants");
const ThaumaticCompassSpiresofOrazcaBase = require("../setPXTC/ThaumaticCompassSpiresofOrazca");

class ThaumaticCompassSpiresofOrazca extends ThaumaticCompassSpiresofOrazcaBase {
  constructor (game) {
    super(game, "Thaumatic Compass // Spires of Orazca", "Ixalan", "XLN");
  }
}

module.exports = ThaumaticCompassSpiresofOrazca;
