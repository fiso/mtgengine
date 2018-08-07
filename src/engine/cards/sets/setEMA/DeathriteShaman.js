"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathriteShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathrite Shaman", "Eternal Masters", "EMA");
  }
}

module.exports = DeathriteShaman;
