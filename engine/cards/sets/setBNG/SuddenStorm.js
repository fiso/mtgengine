"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuddenStorm extends Card {
  constructor(game) {
    super(game, "Sudden Storm", "Born of the Gods", "BNG");
  }
}

module.exports = SuddenStorm;
