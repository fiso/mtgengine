"use strict";
const Constants = require ("../../../Constants");
const PatientRebuildingBase = require("../setM19/PatientRebuilding");

class PatientRebuilding extends PatientRebuildingBase {
  constructor (game) {
    super(game, "Patient Rebuilding", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = PatientRebuilding;
