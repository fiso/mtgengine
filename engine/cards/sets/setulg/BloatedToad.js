"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloatedToad extends Card {
  constructor(game) {
    super(game, "Bloated Toad", "Urza's Legacy", "ULG");
  }
}

module.exports = BloatedToad;
