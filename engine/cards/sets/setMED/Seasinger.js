"use strict";
const Constants = require ("../../../Constants");
const SeasingerBase = require("../setFEM/Seasinger");

class Seasinger extends SeasingerBase {
  constructor(game) {
    super(game, "Seasinger", "Masters Edition", "MED");
  }
}

module.exports = Seasinger;
