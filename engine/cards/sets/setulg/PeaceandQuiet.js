"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PeaceandQuiet extends Card {
  constructor(game) {
    super(game, "Peace and Quiet", "Urza's Legacy", "ULG");
  }
}

module.exports = PeaceandQuiet;
