"use strict";
const Constants = require ("../../../Constants");
const MutilateBase = require("../setC14/Mutilate");

class Mutilate extends MutilateBase {
  constructor(game) {
    super(game, "Mutilate", "Magic 2013", "M13");
  }
}

module.exports = Mutilate;
