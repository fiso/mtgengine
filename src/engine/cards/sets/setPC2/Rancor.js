"use strict";
const Constants = require ("../../../Constants");
const RancorBase = require("../setA25/Rancor");

class Rancor extends RancorBase {
  constructor (game) {
    super(game, "Rancor", "Planechase 2012", "PC2");
  }
}

module.exports = Rancor;
