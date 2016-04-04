"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SigilofSleepBase = require("../setDDI/SigilofSleep.js");

class SigilofSleep extends SigilofSleepBase {
  constructor(game) {
    super(game, "Sigil of Sleep", "Urza's Destiny", "UDS");
  }
}

module.exports = SigilofSleep;
