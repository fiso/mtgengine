"use strict";
const Constants = require ("../../../Constants");
const PyrotechnicsBase = require("../setATH/Pyrotechnics");

class Pyrotechnics extends PyrotechnicsBase {
  constructor(game) {
    super(game, "Pyrotechnics", "Seventh Edition", "7ED");
  }
}

module.exports = Pyrotechnics;
