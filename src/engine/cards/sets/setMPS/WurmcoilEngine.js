"use strict";
const Constants = require ("../../../Constants");
const WurmcoilEngineBase = require("../setCM2/WurmcoilEngine");

class WurmcoilEngine extends WurmcoilEngineBase {
  constructor (game) {
    super(game, "Wurmcoil Engine", "Kaladesh Inventions", "MPS");
  }
}

module.exports = WurmcoilEngine;
