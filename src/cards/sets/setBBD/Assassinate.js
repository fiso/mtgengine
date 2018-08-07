"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Assassinate extends UnimplementedCard {
  constructor (game) {
    super(game, "Assassinate", "Battlebond", "BBD");
  }
}

module.exports = Assassinate;
