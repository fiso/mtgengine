"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrothersYamazaki extends Card {
  constructor(game) {
    super(game, "Brothers Yamazaki", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BrothersYamazaki;
