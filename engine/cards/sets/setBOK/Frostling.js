"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Frostling extends Card {
  constructor(game) {
    super(game, "Frostling", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Frostling;
