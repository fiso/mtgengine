"use strict";
const Constants = require ("../../../Constants");
const DeathHoodCobraBase = require("../setDDM/DeathHoodCobra");

class DeathHoodCobra extends DeathHoodCobraBase {
  constructor(game) {
    super(game, "Death-Hood Cobra", "New Phyrexia", "NPH");
  }
}

module.exports = DeathHoodCobra;
