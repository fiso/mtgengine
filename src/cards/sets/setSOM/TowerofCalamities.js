"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerofCalamities extends UnimplementedCard {
  constructor (game) {
    super(game, "Tower of Calamities", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TowerofCalamities;
