"use strict";
const Constants = require ("../../../Constants");
const ThopterAssemblyBase = require("../setpLPA/ThopterAssembly");

class ThopterAssembly extends ThopterAssemblyBase {
  constructor(game) {
    super(game, "Thopter Assembly", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ThopterAssembly;
