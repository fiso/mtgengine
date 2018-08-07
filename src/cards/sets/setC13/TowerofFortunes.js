"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerofFortunes extends UnimplementedCard {
  constructor (game) {
    super(game, "Tower of Fortunes", "Commander 2013", "C13");
  }
}

module.exports = TowerofFortunes;
