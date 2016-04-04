"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MirarisWakeBase = require("../setCM1/MirarisWake.js");

class MirarisWake extends MirarisWakeBase {
  constructor(game) {
    super(game, "Mirari's Wake", "Pro Tour", "pPRO");
  }
}

module.exports = MirarisWake;
