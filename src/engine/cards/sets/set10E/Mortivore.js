"use strict";
const Constants = require ("../../../Constants");
const MortivoreBase = require("../setCM2/Mortivore");

class Mortivore extends MortivoreBase {
  constructor (game) {
    super(game, "Mortivore", "Tenth Edition", "10E");
  }
}

module.exports = Mortivore;
