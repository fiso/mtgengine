"use strict";
const Constants = require ("../../../Constants");
const SigilofSleepBase = require("../setDDI/SigilofSleep");

class SigilofSleep extends SigilofSleepBase {
  constructor (game) {
    super(game, "Sigil of Sleep", "Urza's Destiny", "UDS");
  }
}

module.exports = SigilofSleep;
