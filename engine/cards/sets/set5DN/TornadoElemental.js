"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TornadoElementalBase = require("../setC14/TornadoElemental.js");

class TornadoElemental extends TornadoElementalBase {
  constructor(game) {
    super(game, "Tornado Elemental", "Fifth Dawn", "5DN");
  }
}

module.exports = TornadoElemental;
