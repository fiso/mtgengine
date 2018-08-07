"use strict";
const Constants = require ("../../../Constants");
const KalitasTraitorofGhetBase = require("../setOGW/KalitasTraitorofGhet");

class KalitasTraitorofGhet extends KalitasTraitorofGhetBase {
  constructor (game) {
    super(game, "Kalitas, Traitor of Ghet", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = KalitasTraitorofGhet;
