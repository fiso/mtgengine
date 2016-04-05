"use strict";
const Constants = require ("../../../Constants");
const RancorBase = require("../setARC/Rancor");

class Rancor extends RancorBase {
  constructor(game) {
    super(game, "Rancor", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Rancor;
