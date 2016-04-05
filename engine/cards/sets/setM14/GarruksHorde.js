"use strict";
const Constants = require ("../../../Constants");
const GarruksHordeBase = require("../setpLPA/GarruksHorde");

class GarruksHorde extends GarruksHordeBase {
  constructor(game) {
    super(game, "Garruk's Horde", "Magic 2014 Core Set", "M14");
  }
}

module.exports = GarruksHorde;
