"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSwineRider extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Swine-Rider", "Visions", "VIS");
  }
}

module.exports = GoblinSwineRider;
