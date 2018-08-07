"use strict";
const Constants = require ("../../../Constants");
const BreathofFuryBase = require("../setC16/BreathofFury");

class BreathofFury extends BreathofFuryBase {
  constructor (game) {
    super(game, "Breath of Fury", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BreathofFury;
