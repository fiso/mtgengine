"use strict";
const Constants = require ("../../../Constants");
const MassofGhoulsBase = require("../setFUT/MassofGhouls");

class MassofGhouls extends MassofGhoulsBase {
  constructor(game) {
    super(game, "Mass of Ghouls", "Tenth Edition", "10E");
  }
}

module.exports = MassofGhouls;
