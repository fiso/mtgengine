"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TornadoElementalBase = require("../setC14/TornadoElemental.js");

class TornadoElemental extends TornadoElementalBase {
  constructor(game) {
    super(game, "Tornado Elemental", "Planechase", "HOP");
  }
}

module.exports = TornadoElemental;
