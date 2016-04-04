"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TowerofCalamities extends Card {
  constructor(game) {
    super(game, "Tower of Calamities", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TowerofCalamities;
