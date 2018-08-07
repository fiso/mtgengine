"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpreadingFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Spreading Flames", "Eldritch Moon", "EMN");
  }
}

module.exports = SpreadingFlames;
