"use strict";
const Constants = require ("../../../Constants");
const MutilateBase = require("../setGVL/Mutilate");

class Mutilate extends MutilateBase {
  constructor (game) {
    super(game, "Mutilate", "Torment", "TOR");
  }
}

module.exports = Mutilate;
