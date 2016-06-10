"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tranquility extends UnimplementedCard {
  constructor (game) {
    super(game, "Tranquility", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Tranquility;
