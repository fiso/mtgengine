"use strict";
const Constants = require ("../../../Constants");
const SkullclampBase = require("../setC14/Skullclamp");

class Skullclamp extends SkullclampBase {
  constructor(game) {
    super(game, "Skullclamp", "Vintage Masters", "VMA");
  }
}

module.exports = Skullclamp;
