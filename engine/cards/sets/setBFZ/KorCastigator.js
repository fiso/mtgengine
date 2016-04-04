"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorCastigator extends Card {
  constructor(game) {
    super(game, "Kor Castigator", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KorCastigator;
