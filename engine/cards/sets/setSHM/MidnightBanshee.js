"use strict";
const Constants = require ("../../../Constants");
const MidnightBansheeBase = require("../setMM2/MidnightBanshee");

class MidnightBanshee extends MidnightBansheeBase {
  constructor(game) {
    super(game, "Midnight Banshee", "Shadowmoor", "SHM");
  }
}

module.exports = MidnightBanshee;
