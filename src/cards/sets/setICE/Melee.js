"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Melee extends UnimplementedCard {
  constructor (game) {
    super(game, "Melee", "Ice Age", "ICE");
  }
}

module.exports = Melee;
