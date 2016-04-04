"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThopterAssemblyBase = require("../setpLPA/ThopterAssembly.js");

class ThopterAssembly extends ThopterAssemblyBase {
  constructor(game) {
    super(game, "Thopter Assembly", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ThopterAssembly;
