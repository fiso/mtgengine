"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSpymaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Spymaster", "You Make the Cube", "PZ2");
  }
}

module.exports = GoblinSpymaster;
