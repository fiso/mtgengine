"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlightSickle extends Card {
  constructor(game) {
    super(game, "Blight Sickle", "Shadowmoor", "SHM");
  }
}

module.exports = BlightSickle;
