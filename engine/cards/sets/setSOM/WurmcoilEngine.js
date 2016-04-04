"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WurmcoilEngineBase = require("../setC14/WurmcoilEngine.js");

class WurmcoilEngine extends WurmcoilEngineBase {
  constructor(game) {
    super(game, "Wurmcoil Engine", "Scars of Mirrodin", "SOM");
  }
}

module.exports = WurmcoilEngine;
