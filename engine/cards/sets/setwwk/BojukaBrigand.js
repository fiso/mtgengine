"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BojukaBrigand extends Card {
  constructor(game) {
    super(game, "Bojuka Brigand", "Worldwake", "WWK");
  }
}

module.exports = BojukaBrigand;
