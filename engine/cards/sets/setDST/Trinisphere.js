"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Trinisphere extends Card {
  constructor(game) {
    super(game, "Trinisphere", "Darksteel", "DST");
  }
}

module.exports = Trinisphere;
