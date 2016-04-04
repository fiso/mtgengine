"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VialofDragonfire extends Card {
  constructor(game) {
    super(game, "Vial of Dragonfire", "Dragons of Tarkir", "DTK");
  }
}

module.exports = VialofDragonfire;
