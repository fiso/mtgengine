"use strict";
const Constants = require ("../../../Constants");
const TrinketMageBase = require("../setDDU/TrinketMage");

class TrinketMage extends TrinketMageBase {
  constructor (game) {
    super(game, "Trinket Mage", "Commander 2016", "C16");
  }
}

module.exports = TrinketMage;
