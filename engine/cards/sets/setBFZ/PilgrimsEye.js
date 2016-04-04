"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PilgrimsEye extends Card {
  constructor(game) {
    super(game, "Pilgrim's Eye", "Battle for Zendikar", "BFZ");
  }
}

module.exports = PilgrimsEye;
