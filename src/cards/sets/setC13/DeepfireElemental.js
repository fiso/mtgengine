"use strict";
const Constants = require ("../../../Constants");
const DeepfireElementalBase = require("../setCSP/DeepfireElemental");

class DeepfireElemental extends DeepfireElementalBase {
  constructor(game) {
    super(game, "Deepfire Elemental", "Commander 2013 Edition", "C13");
  }
}

module.exports = DeepfireElemental;
