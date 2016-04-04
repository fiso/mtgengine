"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntingMoa extends Card {
  constructor(game) {
    super(game, "Hunting Moa", "Archenemy", "ARC");
  }
}

module.exports = HuntingMoa;
