"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExaltedDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Exalted Dragon", "Exodus", "EXO");
  }
}

module.exports = ExaltedDragon;
