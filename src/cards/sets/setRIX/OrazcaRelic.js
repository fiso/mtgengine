"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrazcaRelic extends UnimplementedCard {
  constructor (game) {
    super(game, "Orazca Relic", "Rivals of Ixalan", "RIX");
  }
}

module.exports = OrazcaRelic;
