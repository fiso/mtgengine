"use strict";
const Constants = require ("../../../Constants");
const LastBreathBase = require("../setMMQ/LastBreath");

class LastBreath extends LastBreathBase {
  constructor (game) {
    super(game, "Last Breath", "Theros", "THS");
  }
}

module.exports = LastBreath;
