"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BredfortheHunt extends Card {
  constructor(game) {
    super(game, "Bred for the Hunt", "Dragon's Maze", "DGM");
  }
}

module.exports = BredfortheHunt;
