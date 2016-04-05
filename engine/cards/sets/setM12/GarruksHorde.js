"use strict";
const Constants = require ("../../../Constants");
const GarruksHordeBase = require("../setpLPA/GarruksHorde");

class GarruksHorde extends GarruksHordeBase {
  constructor(game) {
    super(game, "Garruk's Horde", "Magic 2012", "M12");
  }
}

module.exports = GarruksHorde;
