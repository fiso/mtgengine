"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OblivionSower extends Card {
  constructor(game) {
    super(game, "Oblivion Sower", "Battle for Zendikar", "BFZ");
  }
}

module.exports = OblivionSower;
