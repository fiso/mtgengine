"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSettler extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Settler", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinSettler;
