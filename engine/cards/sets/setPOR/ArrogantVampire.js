"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArrogantVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Arrogant Vampire", "Portal", "POR");
  }
}

module.exports = ArrogantVampire;
