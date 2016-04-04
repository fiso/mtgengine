"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoMercy extends Card {
  constructor(game) {
    super(game, "No Mercy", "Urza's Legacy", "ULG");
  }
}

module.exports = NoMercy;
