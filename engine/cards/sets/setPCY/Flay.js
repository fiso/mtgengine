"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flay extends Card {
  constructor(game) {
    super(game, "Flay", "Prophecy", "PCY");
  }
}

module.exports = Flay;
