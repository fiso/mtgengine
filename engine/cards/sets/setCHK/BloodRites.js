"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodRites extends Card {
  constructor(game) {
    super(game, "Blood Rites", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BloodRites;
