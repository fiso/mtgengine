"use strict";
const Constants = require ("../../../Constants");
const PillagingHordeBase = require("../setPOR/PillagingHorde");

class PillagingHorde extends PillagingHordeBase {
  constructor(game) {
    super(game, "Pillaging Horde", "Vintage Masters", "VMA");
  }
}

module.exports = PillagingHorde;
