"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrimSamiteHealer extends Card {
  constructor(game) {
    super(game, "Orim, Samite Healer", "Tempest", "TMP");
  }
}

module.exports = OrimSamiteHealer;
