"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sunstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunstone", "Ice Age", "ICE");
  }
}

module.exports = Sunstone;
