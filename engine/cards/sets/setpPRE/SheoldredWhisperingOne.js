"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SheoldredWhisperingOneBase = require("../setNPH/SheoldredWhisperingOne.js");

class SheoldredWhisperingOne extends SheoldredWhisperingOneBase {
  constructor(game) {
    super(game, "Sheoldred, Whispering One", "Prerelease Events", "pPRE");
  }
}

module.exports = SheoldredWhisperingOne;
