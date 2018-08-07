"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntedCadaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Haunted Cadaver", "Onslaught", "ONS");
  }
}

module.exports = HauntedCadaver;
