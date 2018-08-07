"use strict";
const Constants = require ("../../../Constants");
const SkullclampBase = require("../setC17/Skullclamp");

class Skullclamp extends SkullclampBase {
  constructor (game) {
    super(game, "Skullclamp", "Commander 2014", "C14");
  }
}

module.exports = Skullclamp;
