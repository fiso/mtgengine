"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrochiHatchery extends Card {
  constructor(game) {
    super(game, "Orochi Hatchery", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OrochiHatchery;
