"use strict";
const Constants = require ("../../../Constants");
const MantisEngineBase = require("../set10E/MantisEngine");

class MantisEngine extends MantisEngineBase {
  constructor(game) {
    super(game, "Mantis Engine", "Urza's Destiny", "UDS");
  }
}

module.exports = MantisEngine;
