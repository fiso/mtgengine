"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HomicidalSeclusion extends Card {
  constructor(game) {
    super(game, "Homicidal Seclusion", "Avacyn Restored", "AVR");
  }
}

module.exports = HomicidalSeclusion;
