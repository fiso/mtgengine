"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWelder extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Welder", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = GoblinWelder;
