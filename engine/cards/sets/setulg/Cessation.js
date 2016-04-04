"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cessation extends Card {
  constructor(game) {
    super(game, "Cessation", "Urza's Legacy", "ULG");
  }
}

module.exports = Cessation;
