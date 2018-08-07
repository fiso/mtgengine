"use strict";
const Constants = require ("../../../Constants");
const GrapplingHookBase = require("../setC17/GrapplingHook");

class GrapplingHook extends GrapplingHookBase {
  constructor (game) {
    super(game, "Grappling Hook", "Zendikar", "ZEN");
  }
}

module.exports = GrapplingHook;
