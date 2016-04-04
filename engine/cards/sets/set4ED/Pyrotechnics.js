"use strict";
const Constants = require ("../../../Constants");
const PyrotechnicsBase = require("../setATH/Pyrotechnics");

class Pyrotechnics extends PyrotechnicsBase {
  constructor(game) {
    super(game, "Pyrotechnics", "Fourth Edition", "4ED");
  }
}

module.exports = Pyrotechnics;
