"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkitteringSurveyor extends UnimplementedCard {
  constructor (game) {
    super(game, "Skittering Surveyor", "Dominaria", "DOM");
  }
}

module.exports = SkitteringSurveyor;
