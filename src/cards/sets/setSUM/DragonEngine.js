"use strict";
const Constants = require ("../../../Constants");
const DragonEngineBase = require("../setME4/DragonEngine");

class DragonEngine extends DragonEngineBase {
  constructor (game) {
    super(game, "Dragon Engine", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = DragonEngine;
