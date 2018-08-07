"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deathrender extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathrender", "Conspiracy", "CNS");
  }
}

module.exports = Deathrender;
