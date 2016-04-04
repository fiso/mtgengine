"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraveBirthing extends Card {
  constructor(game) {
    super(game, "Grave Birthing", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GraveBirthing;
