"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BriarShield extends Card {
  constructor(game) {
    super(game, "Briar Shield", "Weatherlight", "WTH");
  }
}

module.exports = BriarShield;
