"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepfireElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Deepfire Elemental", "Coldsnap", "CSP");
  }
}

module.exports = DeepfireElemental;
