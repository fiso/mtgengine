"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sacrifice extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacrifice", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Sacrifice;
