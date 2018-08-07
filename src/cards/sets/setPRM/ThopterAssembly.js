"use strict";
const Constants = require ("../../../Constants");
const ThopterAssemblyBase = require("../setC18/ThopterAssembly");

class ThopterAssembly extends ThopterAssemblyBase {
  constructor (game) {
    super(game, "Thopter Assembly", "Magic Online Promos", "PRM");
  }
}

module.exports = ThopterAssembly;
