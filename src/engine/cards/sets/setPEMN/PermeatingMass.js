"use strict";
const Constants = require ("../../../Constants");
const PermeatingMassBase = require("../setEMN/PermeatingMass");

class PermeatingMass extends PermeatingMassBase {
  constructor (game) {
    super(game, "Permeating Mass", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = PermeatingMass;
