"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenesisChamber extends UnimplementedCard {
  constructor (game) {
    super(game, "Genesis Chamber", "Battlebond", "BBD");
  }
}

module.exports = GenesisChamber;
