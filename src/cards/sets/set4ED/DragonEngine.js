"use strict";
const Constants = require ("../../../Constants");
const DragonEngineBase = require("../setATQ/DragonEngine");

class DragonEngine extends DragonEngineBase {
  constructor (game) {
    super(game, "Dragon Engine", "Fourth Edition", "4ED");
  }
}

module.exports = DragonEngine;
