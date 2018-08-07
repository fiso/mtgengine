"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thirst extends UnimplementedCard {
  constructor (game) {
    super(game, "Thirst", "Mirage", "MIR");
  }
}

module.exports = Thirst;
