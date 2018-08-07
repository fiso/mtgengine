"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Floodgate extends UnimplementedCard {
  constructor (game) {
    super(game, "Floodgate", "Mirage", "MIR");
  }
}

module.exports = Floodgate;
