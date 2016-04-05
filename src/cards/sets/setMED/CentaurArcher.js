"use strict";
const Constants = require ("../../../Constants");
const CentaurArcherBase = require("../setICE/CentaurArcher");

class CentaurArcher extends CentaurArcherBase {
  constructor(game) {
    super(game, "Centaur Archer", "Masters Edition", "MED");
  }
}

module.exports = CentaurArcher;
