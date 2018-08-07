"use strict";
const Constants = require ("../../../Constants");
const TornadoElementalBase = require("../setCMA/TornadoElemental");

class TornadoElemental extends TornadoElementalBase {
  constructor (game) {
    super(game, "Tornado Elemental", "Planechase", "HOP");
  }
}

module.exports = TornadoElemental;
