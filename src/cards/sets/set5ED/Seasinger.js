"use strict";
const Constants = require ("../../../Constants");
const SeasingerBase = require("../setFEM/Seasinger");

class Seasinger extends SeasingerBase {
  constructor(game) {
    super(game, "Seasinger", "Fifth Edition", "5ED");
  }
}

module.exports = Seasinger;
