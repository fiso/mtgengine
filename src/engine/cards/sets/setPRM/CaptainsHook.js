"use strict";
const Constants = require ("../../../Constants");
const CaptainsHookBase = require("../setPRIX/CaptainsHook");

class CaptainsHook extends CaptainsHookBase {
  constructor (game) {
    super(game, "Captain's Hook", "Magic Online Promos", "PRM");
  }
}

module.exports = CaptainsHook;
