"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagicalHacker extends UnimplementedCard {
  constructor (game) {
    super(game, "Magical Hacker", "Unhinged", "UNH");
  }
}

module.exports = MagicalHacker;
