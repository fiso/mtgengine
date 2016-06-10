"use strict";
const Constants = require ("../../../Constants");
const PyrotechnicsBase = require("../setATH/Pyrotechnics");

class Pyrotechnics extends PyrotechnicsBase {
  constructor (game) {
    super(game, "Pyrotechnics", "Fifth Edition", "5ED");
  }
}

module.exports = Pyrotechnics;
