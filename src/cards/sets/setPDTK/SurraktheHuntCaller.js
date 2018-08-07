"use strict";
const Constants = require ("../../../Constants");
const SurraktheHuntCallerBase = require("../setDTK/SurraktheHuntCaller");

class SurraktheHuntCaller extends SurraktheHuntCallerBase {
  constructor (game) {
    super(game, "Surrak, the Hunt Caller", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = SurraktheHuntCaller;
