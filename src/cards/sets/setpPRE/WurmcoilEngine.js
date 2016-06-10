"use strict";
const Constants = require ("../../../Constants");
const WurmcoilEngineBase = require("../setC14/WurmcoilEngine");

class WurmcoilEngine extends WurmcoilEngineBase {
  constructor (game) {
    super(game, "Wurmcoil Engine", "Prerelease Events", "pPRE");
  }
}

module.exports = WurmcoilEngine;
