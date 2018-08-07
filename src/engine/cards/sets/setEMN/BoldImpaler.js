"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoldImpaler extends UnimplementedCard {
  constructor (game) {
    super(game, "Bold Impaler", "Eldritch Moon", "EMN");
  }
}

module.exports = BoldImpaler;
