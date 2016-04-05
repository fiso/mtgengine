"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeetleformMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Beetleform Mage", "Dragon's Maze", "DGM");
  }
}

module.exports = BeetleformMage;
