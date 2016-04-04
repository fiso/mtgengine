"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntheWebofWar extends Card {
  constructor(game) {
    super(game, "In the Web of War", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = IntheWebofWar;
