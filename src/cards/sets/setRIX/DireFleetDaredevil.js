"use strict";
const Constants = require ("../../../Constants");
const DireFleetDaredevilBase = require("../setPRIX/DireFleetDaredevil");

class DireFleetDaredevil extends DireFleetDaredevilBase {
  constructor (game) {
    super(game, "Dire Fleet Daredevil", "Rivals of Ixalan", "RIX");
  }
}

module.exports = DireFleetDaredevil;
