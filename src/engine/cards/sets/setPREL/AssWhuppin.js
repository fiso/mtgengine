"use strict";
const Constants = require ("../../../Constants");
const AssWhuppinBase = require("../setUNH/AssWhuppin");

class AssWhuppin extends AssWhuppinBase {
  constructor (game) {
    super(game, "Ass Whuppin'", "Release Events", "PREL");
  }
}

module.exports = AssWhuppin;
