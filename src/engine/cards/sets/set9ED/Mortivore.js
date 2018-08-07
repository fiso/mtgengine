"use strict";
const Constants = require ("../../../Constants");
const MortivoreBase = require("../setCM2/Mortivore");

class Mortivore extends MortivoreBase {
  constructor (game) {
    super(game, "Mortivore", "Ninth Edition", "9ED");
  }
}

module.exports = Mortivore;
