"use strict";
const Constants = require ("../../../Constants");
const SlySpyBase = require("../setUST/SlySpy");

class SlySpy extends SlySpyBase {
  constructor (game) {
    super(game, "Sly Spy", "Unstable", "UST");
  }
}

module.exports = SlySpy;
