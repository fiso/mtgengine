"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeepfireElementalBase = require("../setCSP/DeepfireElemental.js");

class DeepfireElemental extends DeepfireElementalBase {
  constructor(game) {
    super(game, "Deepfire Elemental", "Commander 2013 Edition", "C13");
  }
}

module.exports = DeepfireElemental;
