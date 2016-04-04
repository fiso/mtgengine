"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorderGuardBase = require("../setPOR/BorderGuard.js");

class BorderGuard extends BorderGuardBase {
  constructor(game) {
    super(game, "Border Guard", "Starter 1999", "S99");
  }
}

module.exports = BorderGuard;
