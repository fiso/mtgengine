"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MantisEngineBase = require("../set10E/MantisEngine.js");

class MantisEngine extends MantisEngineBase {
  constructor(game) {
    super(game, "Mantis Engine", "Urza's Destiny", "UDS");
  }
}

module.exports = MantisEngine;
