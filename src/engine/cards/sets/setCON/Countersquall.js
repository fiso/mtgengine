"use strict";
const Constants = require ("../../../Constants");
const CountersquallBase = require("../setDDH/Countersquall");

class Countersquall extends CountersquallBase {
  constructor (game) {
    super(game, "Countersquall", "Conflux", "CON");
  }
}

module.exports = Countersquall;
