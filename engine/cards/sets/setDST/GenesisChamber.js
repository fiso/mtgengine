"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GenesisChamber extends Card {
  constructor(game) {
    super(game, "Genesis Chamber", "Darksteel", "DST");
  }
}

module.exports = GenesisChamber;
