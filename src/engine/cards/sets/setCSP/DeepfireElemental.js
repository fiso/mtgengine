"use strict";
const Constants = require ("../../../Constants");
const DeepfireElementalBase = require("../setC13/DeepfireElemental");

class DeepfireElemental extends DeepfireElementalBase {
  constructor (game) {
    super(game, "Deepfire Elemental", "Coldsnap", "CSP");
  }
}

module.exports = DeepfireElemental;
