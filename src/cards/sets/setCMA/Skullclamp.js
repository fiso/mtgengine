"use strict";
const Constants = require ("../../../Constants");
const SkullclampBase = require("../setC17/Skullclamp");

class Skullclamp extends SkullclampBase {
  constructor (game) {
    super(game, "Skullclamp", "Commander Anthology", "CMA");
  }
}

module.exports = Skullclamp;
