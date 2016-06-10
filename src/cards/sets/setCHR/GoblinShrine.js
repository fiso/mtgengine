"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinShrine extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Shrine", "Chronicles", "CHR");
  }
}

module.exports = GoblinShrine;
