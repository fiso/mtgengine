"use strict";
const Constants = require ("../../../Constants");
const RancorBase = require("../setA25/Rancor");

class Rancor extends RancorBase {
  constructor (game) {
    super(game, "Rancor", "Friday Night Magic 2005", "F05");
  }
}

module.exports = Rancor;
