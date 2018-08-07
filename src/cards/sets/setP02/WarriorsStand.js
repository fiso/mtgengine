"use strict";
const Constants = require ("../../../Constants");
const WarriorsStandBase = require("../setPTK/WarriorsStand");

class WarriorsStand extends WarriorsStandBase {
  constructor (game) {
    super(game, "Warrior's Stand", "Portal Second Age", "P02");
  }
}

module.exports = WarriorsStand;
