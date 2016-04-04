"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MidnightBansheeBase = require("../setMM2/MidnightBanshee.js");

class MidnightBanshee extends MidnightBansheeBase {
  constructor(game) {
    super(game, "Midnight Banshee", "Shadowmoor", "SHM");
  }
}

module.exports = MidnightBanshee;
