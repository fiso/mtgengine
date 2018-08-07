"use strict";
const Constants = require ("../../../Constants");
const SkullclampBase = require("../setC17/Skullclamp");

class Skullclamp extends SkullclampBase {
  constructor (game) {
    super(game, "Skullclamp", "Commander 2011", "CMD");
  }
}

module.exports = Skullclamp;
