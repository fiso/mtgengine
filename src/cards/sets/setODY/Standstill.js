"use strict";
const Constants = require ("../../../Constants");
const StandstillBase = require("../setPIDW/Standstill");

class Standstill extends StandstillBase {
  constructor (game) {
    super(game, "Standstill", "Odyssey", "ODY");
  }
}

module.exports = Standstill;
