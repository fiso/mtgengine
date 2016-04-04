"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrashingBoarsBase = require("../setBTD/CrashingBoars.js");

class CrashingBoars extends CrashingBoarsBase {
  constructor(game) {
    super(game, "Crashing Boars", "Exodus", "EXO");
  }
}

module.exports = CrashingBoars;
