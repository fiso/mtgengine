"use strict";
const Constants = require ("../../../Constants");
const WurmcoilEngineBase = require("../setCM2/WurmcoilEngine");

class WurmcoilEngine extends WurmcoilEngineBase {
  constructor (game) {
    super(game, "Wurmcoil Engine", "Scars of Mirrodin Promos", "PSOM");
  }
}

module.exports = WurmcoilEngine;
