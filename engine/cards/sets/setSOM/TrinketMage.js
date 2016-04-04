"use strict";
const Constants = require ("../../../Constants");
const TrinketMageBase = require("../setDDF/TrinketMage");

class TrinketMage extends TrinketMageBase {
  constructor(game) {
    super(game, "Trinket Mage", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TrinketMage;
