"use strict";
const Constants = require ("../../../Constants");
const PyrotechnicsBase = require("../setFRF/Pyrotechnics");

class Pyrotechnics extends PyrotechnicsBase {
  constructor (game) {
    super(game, "Pyrotechnics", "Eighth Edition", "8ED");
  }
}

module.exports = Pyrotechnics;
