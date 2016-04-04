"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SamitePilgrim extends Card {
  constructor(game) {
    super(game, "Samite Pilgrim", "Planeshift", "PLS");
  }
}

module.exports = SamitePilgrim;
