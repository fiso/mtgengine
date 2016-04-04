"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarrowChomper extends Card {
  constructor(game) {
    super(game, "Marrow Chomper", "Alara Reborn", "ARB");
  }
}

module.exports = MarrowChomper;
