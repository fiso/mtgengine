"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbundantMaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Abundant Maw", "Eldritch Moon", "EMN");
  }
}

module.exports = AbundantMaw;
