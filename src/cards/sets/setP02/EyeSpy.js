"use strict";
const Constants = require ("../../../Constants");
const EyeSpyBase = require("../setS99/EyeSpy");

class EyeSpy extends EyeSpyBase {
  constructor (game) {
    super(game, "Eye Spy", "Portal Second Age", "P02");
  }
}

module.exports = EyeSpy;
