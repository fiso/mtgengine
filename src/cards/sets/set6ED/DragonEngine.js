"use strict";
const Constants = require ("../../../Constants");
const DragonEngineBase = require("../setATQ/DragonEngine");

class DragonEngine extends DragonEngineBase {
  constructor (game) {
    super(game, "Dragon Engine", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DragonEngine;
