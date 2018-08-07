"use strict";
const Constants = require ("../../../Constants");
const MutilateBase = require("../setGVL/Mutilate");

class Mutilate extends MutilateBase {
  constructor (game) {
    super(game, "Mutilate", "Commander 2014", "C14");
  }
}

module.exports = Mutilate;
