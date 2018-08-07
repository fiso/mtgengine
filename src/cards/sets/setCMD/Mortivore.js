"use strict";
const Constants = require ("../../../Constants");
const MortivoreBase = require("../setCM2/Mortivore");

class Mortivore extends MortivoreBase {
  constructor (game) {
    super(game, "Mortivore", "Commander 2011", "CMD");
  }
}

module.exports = Mortivore;
