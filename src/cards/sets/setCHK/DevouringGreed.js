"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevouringGreed extends UnimplementedCard {
  constructor (game) {
    super(game, "Devouring Greed", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DevouringGreed;
