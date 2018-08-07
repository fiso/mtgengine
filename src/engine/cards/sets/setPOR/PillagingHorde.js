"use strict";
const Constants = require ("../../../Constants");
const PillagingHordeBase = require("../setVMA/PillagingHorde");

class PillagingHorde extends PillagingHordeBase {
  constructor (game) {
    super(game, "Pillaging Horde", "Portal", "POR");
  }
}

module.exports = PillagingHorde;
