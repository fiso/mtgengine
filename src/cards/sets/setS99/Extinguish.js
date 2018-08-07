"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Extinguish extends UnimplementedCard {
  constructor (game) {
    super(game, "Extinguish", "Starter 1999", "S99");
  }
}

module.exports = Extinguish;
