"use strict";
const Constants = require ("../../../Constants");
const InfernalDarknessBase = require("../setICE/InfernalDarkness");

class InfernalDarkness extends InfernalDarknessBase {
  constructor(game) {
    super(game, "Infernal Darkness", "Masters Edition II", "ME2");
  }
}

module.exports = InfernalDarkness;
