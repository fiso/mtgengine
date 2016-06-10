"use strict";
const Constants = require ("../../../Constants");
const FecundityBase = require("../setBRB/Fecundity");

class Fecundity extends FecundityBase {
  constructor (game) {
    super(game, "Fecundity", "Eighth Edition", "8ED");
  }
}

module.exports = Fecundity;
