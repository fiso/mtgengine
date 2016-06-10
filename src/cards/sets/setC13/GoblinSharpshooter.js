"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSharpshooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Sharpshooter", "Commander 2013 Edition", "C13");
  }
}

module.exports = GoblinSharpshooter;
