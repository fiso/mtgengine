"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrangeInversion extends Card {
  constructor(game) {
    super(game, "Strange Inversion", "Champions of Kamigawa", "CHK");
  }
}

module.exports = StrangeInversion;
