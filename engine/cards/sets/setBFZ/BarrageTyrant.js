"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrageTyrant extends Card {
  constructor(game) {
    super(game, "Barrage Tyrant", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BarrageTyrant;
