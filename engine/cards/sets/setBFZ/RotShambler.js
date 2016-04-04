"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RotShambler extends Card {
  constructor(game) {
    super(game, "Rot Shambler", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RotShambler;
