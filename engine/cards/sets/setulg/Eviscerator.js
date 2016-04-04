"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Eviscerator extends Card {
  constructor(game) {
    super(game, "Eviscerator", "Urza's Legacy", "ULG");
  }
}

module.exports = Eviscerator;
