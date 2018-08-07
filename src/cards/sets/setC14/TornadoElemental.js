"use strict";
const Constants = require ("../../../Constants");
const TornadoElementalBase = require("../setCMA/TornadoElemental");

class TornadoElemental extends TornadoElementalBase {
  constructor (game) {
    super(game, "Tornado Elemental", "Commander 2014", "C14");
  }
}

module.exports = TornadoElemental;
