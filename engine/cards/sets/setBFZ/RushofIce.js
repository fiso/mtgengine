"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RushofIce extends Card {
  constructor(game) {
    super(game, "Rush of Ice", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RushofIce;
