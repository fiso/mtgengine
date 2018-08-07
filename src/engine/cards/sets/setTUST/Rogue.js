"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rogue extends UnimplementedCard {
  constructor (game) {
    super(game, "Rogue", "Unstable Tokens", "TUST");
  }
}

module.exports = Rogue;
