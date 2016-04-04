"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Songstitcher extends Card {
  constructor(game) {
    super(game, "Songstitcher", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Songstitcher;
