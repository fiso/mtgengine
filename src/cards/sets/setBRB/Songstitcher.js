"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Songstitcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Songstitcher", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Songstitcher;
