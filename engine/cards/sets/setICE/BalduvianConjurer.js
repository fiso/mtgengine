"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianConjurer extends Card {
  constructor(game) {
    super(game, "Balduvian Conjurer", "Ice Age", "ICE");
  }
}

module.exports = BalduvianConjurer;
