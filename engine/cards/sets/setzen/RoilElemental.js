"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoilElemental extends Card {
  constructor(game) {
    super(game, "Roil Elemental", "Zendikar", "ZEN");
  }
}

module.exports = RoilElemental;
