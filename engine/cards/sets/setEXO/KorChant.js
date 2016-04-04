"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorChant extends Card {
  constructor(game) {
    super(game, "Kor Chant", "Exodus", "EXO");
  }
}

module.exports = KorChant;
