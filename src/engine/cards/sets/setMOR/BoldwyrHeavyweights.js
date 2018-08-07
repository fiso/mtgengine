"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoldwyrHeavyweights extends UnimplementedCard {
  constructor (game) {
    super(game, "Boldwyr Heavyweights", "Morningtide", "MOR");
  }
}

module.exports = BoldwyrHeavyweights;
