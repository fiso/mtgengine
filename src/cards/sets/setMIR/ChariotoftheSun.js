"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChariotoftheSun extends UnimplementedCard {
  constructor(game) {
    super(game, "Chariot of the Sun", "Mirage", "MIR");
  }
}

module.exports = ChariotoftheSun;
