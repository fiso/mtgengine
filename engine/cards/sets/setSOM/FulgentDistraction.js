"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FulgentDistraction extends Card {
  constructor(game) {
    super(game, "Fulgent Distraction", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FulgentDistraction;
