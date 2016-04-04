"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TethmosHighPriest extends Card {
  constructor(game) {
    super(game, "Tethmos High Priest", "Journey into Nyx", "JOU");
  }
}

module.exports = TethmosHighPriest;
