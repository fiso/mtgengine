"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindSeer extends Card {
  constructor(game) {
    super(game, "Blind Seer", "Invasion", "INV");
  }
}

module.exports = BlindSeer;
