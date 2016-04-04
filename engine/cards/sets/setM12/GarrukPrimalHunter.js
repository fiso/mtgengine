"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarrukPrimalHunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Garruk, Primal Hunter", "Magic 2012", "M12");
  }
}

module.exports = GarrukPrimalHunter;
