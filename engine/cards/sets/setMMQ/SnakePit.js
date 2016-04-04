"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnakePit extends Card {
  constructor(game) {
    super(game, "Snake Pit", "Mercadian Masques", "MMQ");
  }
}

module.exports = SnakePit;
