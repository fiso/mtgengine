"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodMoon extends Card {
  constructor(game) {
    super(game, "Blood Moon", "Chronicles", "CHR");
  }
}

module.exports = BloodMoon;
