"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeastofWorms extends UnimplementedCard {
  constructor(game) {
    super(game, "Feast of Worms", "Champions of Kamigawa", "CHK");
  }
}

module.exports = FeastofWorms;
