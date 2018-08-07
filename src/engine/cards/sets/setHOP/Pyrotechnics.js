"use strict";
const Constants = require ("../../../Constants");
const PyrotechnicsBase = require("../setFRF/Pyrotechnics");

class Pyrotechnics extends PyrotechnicsBase {
  constructor (game) {
    super(game, "Pyrotechnics", "Planechase", "HOP");
  }
}

module.exports = Pyrotechnics;
