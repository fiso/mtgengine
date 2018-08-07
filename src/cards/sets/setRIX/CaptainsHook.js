"use strict";
const Constants = require ("../../../Constants");
const CaptainsHookBase = require("../setPRIX/CaptainsHook");

class CaptainsHook extends CaptainsHookBase {
  constructor (game) {
    super(game, "Captain's Hook", "Rivals of Ixalan", "RIX");
  }
}

module.exports = CaptainsHook;
