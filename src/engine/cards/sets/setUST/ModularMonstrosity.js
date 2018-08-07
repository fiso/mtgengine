"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ModularMonstrosity extends UnimplementedCard {
  constructor (game) {
    super(game, "Modular Monstrosity", "Unstable", "UST");
  }
}

module.exports = ModularMonstrosity;
