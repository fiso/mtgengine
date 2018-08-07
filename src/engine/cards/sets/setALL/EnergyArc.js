"use strict";
const Constants = require ("../../../Constants");
const EnergyArcBase = require("../setMED/EnergyArc");

class EnergyArc extends EnergyArcBase {
  constructor (game) {
    super(game, "Energy Arc", "Alliances", "ALL");
  }
}

module.exports = EnergyArc;
