"use strict";
const Constants = require ("../../../Constants");
const BorderGuardBase = require("../setPOR/BorderGuard");

class BorderGuard extends BorderGuardBase {
  constructor (game) {
    super(game, "Border Guard", "Starter 1999", "S99");
  }
}

module.exports = BorderGuard;
