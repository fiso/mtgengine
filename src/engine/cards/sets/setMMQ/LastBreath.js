"use strict";
const Constants = require ("../../../Constants");
const LastBreathBase = require("../setTHS/LastBreath");

class LastBreath extends LastBreathBase {
  constructor (game) {
    super(game, "Last Breath", "Mercadian Masques", "MMQ");
  }
}

module.exports = LastBreath;
