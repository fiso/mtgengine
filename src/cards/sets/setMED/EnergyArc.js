"use strict";
const Constants = require ("../../../Constants");
const EnergyArcBase = require("../setALL/EnergyArc");

class EnergyArc extends EnergyArcBase {
  constructor (game) {
    super(game, "Energy Arc", "Masters Edition", "MED");
  }
}

module.exports = EnergyArc;
