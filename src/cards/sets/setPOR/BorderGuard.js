"use strict";
const Constants = require ("../../../Constants");
const BorderGuardBase = require("../setS99/BorderGuard");

class BorderGuard extends BorderGuardBase {
  constructor (game) {
    super(game, "Border Guard", "Portal", "POR");
  }
}

module.exports = BorderGuard;
