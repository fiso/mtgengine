"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MineMineMine extends Card {
  constructor(game) {
    super(game, "Mine, Mine, Mine!", "Unglued", "UGL");
  }
}

module.exports = MineMineMine;
