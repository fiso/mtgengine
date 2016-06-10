"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Spy", "Invasion", "INV");
  }
}

module.exports = GoblinSpy;
