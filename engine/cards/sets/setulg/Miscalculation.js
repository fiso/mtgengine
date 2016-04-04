"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Miscalculation extends Card {
  constructor(game) {
    super(game, "Miscalculation", "Urza's Legacy", "ULG");
  }
}

module.exports = Miscalculation;
