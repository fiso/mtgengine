"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GamePreserve extends Card {
  constructor(game) {
    super(game, "Game Preserve", "Mercadian Masques", "MMQ");
  }
}

module.exports = GamePreserve;
