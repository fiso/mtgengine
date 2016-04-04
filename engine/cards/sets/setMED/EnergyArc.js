"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnergyArcBase = require("../setALL/EnergyArc.js");

class EnergyArc extends EnergyArcBase {
  constructor(game) {
    super(game, "Energy Arc", "Masters Edition", "MED");
  }
}

module.exports = EnergyArc;
