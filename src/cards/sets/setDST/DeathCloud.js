"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathCloud extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Cloud", "Darksteel", "DST");
  }
}

module.exports = DeathCloud;
