"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuietPurity extends UnimplementedCard {
  constructor (game) {
    super(game, "Quiet Purity", "Champions of Kamigawa", "CHK");
  }
}

module.exports = QuietPurity;
