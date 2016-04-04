"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PixieQueen extends Card {
  constructor(game) {
    super(game, "Pixie Queen", "Legends", "LEG");
  }
}

module.exports = PixieQueen;
