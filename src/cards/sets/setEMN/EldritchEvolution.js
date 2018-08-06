"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldritchEvolution extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldritch Evolution", "Eldritch Moon", "EMN");
  }
}

module.exports = EldritchEvolution;
