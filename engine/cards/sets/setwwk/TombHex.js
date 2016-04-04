"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TombHex extends Card {
  constructor(game) {
    super(game, "Tomb Hex", "Worldwake", "WWK");
  }
}

module.exports = TombHex;
