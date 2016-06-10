"use strict";
const Constants = require ("../../../Constants");
const SheoldredWhisperingOneBase = require("../setNPH/SheoldredWhisperingOne");

class SheoldredWhisperingOne extends SheoldredWhisperingOneBase {
  constructor (game) {
    super(game, "Sheoldred, Whispering One", "Prerelease Events", "pPRE");
  }
}

module.exports = SheoldredWhisperingOne;
