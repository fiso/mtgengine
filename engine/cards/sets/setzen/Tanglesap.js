"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tanglesap extends Card {
  constructor(game) {
    super(game, "Tanglesap", "Zendikar", "ZEN");
  }
}

module.exports = Tanglesap;
