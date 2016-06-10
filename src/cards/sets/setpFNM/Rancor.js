"use strict";
const Constants = require ("../../../Constants");
const RancorBase = require("../setARC/Rancor");

class Rancor extends RancorBase {
  constructor (game) {
    super(game, "Rancor", "Friday Night Magic", "pFNM");
  }
}

module.exports = Rancor;
