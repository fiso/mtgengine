"use strict";
const Constants = require ("../../../Constants");
const SkullclampBase = require("../setC14/Skullclamp");

class Skullclamp extends SkullclampBase {
  constructor(game) {
    super(game, "Skullclamp", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Skullclamp;
