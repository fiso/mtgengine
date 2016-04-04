"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shuko extends Card {
  constructor(game) {
    super(game, "Shuko", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Shuko;
