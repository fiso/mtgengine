"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicArbiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Arbiter", "Commander Anthology", "CMA");
  }
}

module.exports = AngelicArbiter;
