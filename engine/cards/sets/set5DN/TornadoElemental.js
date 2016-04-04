"use strict";
const Constants = require ("../../../Constants");
const TornadoElementalBase = require("../setC14/TornadoElemental");

class TornadoElemental extends TornadoElementalBase {
  constructor(game) {
    super(game, "Tornado Elemental", "Fifth Dawn", "5DN");
  }
}

module.exports = TornadoElemental;
