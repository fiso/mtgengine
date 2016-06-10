"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shuko extends UnimplementedCard {
  constructor (game) {
    super(game, "Shuko", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Shuko;
