"use strict";
const Constants = require ("../../../Constants");
const WurmcoilEngineBase = require("../setC14/WurmcoilEngine");

class WurmcoilEngine extends WurmcoilEngineBase {
  constructor(game) {
    super(game, "Wurmcoil Engine", "Scars of Mirrodin", "SOM");
  }
}

module.exports = WurmcoilEngine;
