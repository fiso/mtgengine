"use strict";
const Constants = require ("../../../Constants");
const InverterofTruthBase = require("../setOGW/InverterofTruth");

class InverterofTruth extends InverterofTruthBase {
  constructor (game) {
    super(game, "Inverter of Truth", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = InverterofTruth;
