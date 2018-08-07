"use strict";
const Constants = require ("../../../Constants");
const GarruksHordeBase = require("../setW17/GarruksHorde");

class GarruksHorde extends GarruksHordeBase {
  constructor (game) {
    super(game, "Garruk's Horde", "Magic 2014", "M14");
  }
}

module.exports = GarruksHorde;
