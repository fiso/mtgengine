"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire // Vampire", "Unstable Tokens", "TUST");
  }
}

module.exports = VampireVampire;
