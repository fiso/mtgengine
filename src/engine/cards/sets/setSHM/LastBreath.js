"use strict";
const Constants = require ("../../../Constants");
const LastBreathBase = require("../setTHS/LastBreath");

class LastBreath extends LastBreathBase {
  constructor (game) {
    super(game, "Last Breath", "Shadowmoor", "SHM");
  }
}

module.exports = LastBreath;
