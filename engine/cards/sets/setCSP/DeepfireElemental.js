"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepfireElemental extends Card {
  constructor(game) {
    super(game, "Deepfire Elemental", "Coldsnap", "CSP");
  }
}

module.exports = DeepfireElemental;
