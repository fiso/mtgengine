"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlightHerder extends Card {
  constructor(game) {
    super(game, "Blight Herder", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightHerder;
