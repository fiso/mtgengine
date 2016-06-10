"use strict";
const Constants = require ("../../../Constants");
const PyrotechnicsBase = require("../setATH/Pyrotechnics");

class Pyrotechnics extends PyrotechnicsBase {
  constructor (game) {
    super(game, "Pyrotechnics", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = Pyrotechnics;
