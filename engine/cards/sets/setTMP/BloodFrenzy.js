"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodFrenzy extends Card {
  constructor(game) {
    super(game, "Blood Frenzy", "Tempest", "TMP");
  }
}

module.exports = BloodFrenzy;
