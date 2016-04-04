"use strict";
const Constants = require ("../../../Constants");
const PyrotechnicsBase = require("../setATH/Pyrotechnics");

class Pyrotechnics extends PyrotechnicsBase {
  constructor(game) {
    super(game, "Pyrotechnics", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Pyrotechnics;
