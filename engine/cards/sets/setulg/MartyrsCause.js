"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartyrsCause extends Card {
  constructor(game) {
    super(game, "Martyr's Cause", "Urza's Legacy", "ULG");
  }
}

module.exports = MartyrsCause;
