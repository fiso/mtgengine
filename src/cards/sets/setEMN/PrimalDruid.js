"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Druid", "Eldritch Moon", "EMN");
  }
}

module.exports = PrimalDruid;
