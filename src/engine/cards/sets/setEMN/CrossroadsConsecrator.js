"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrossroadsConsecrator extends UnimplementedCard {
  constructor (game) {
    super(game, "Crossroads Consecrator", "Eldritch Moon", "EMN");
  }
}

module.exports = CrossroadsConsecrator;
