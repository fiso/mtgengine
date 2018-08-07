"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stonewright extends UnimplementedCard {
  constructor (game) {
    super(game, "Stonewright", "Avacyn Restored", "AVR");
  }
}

module.exports = Stonewright;
