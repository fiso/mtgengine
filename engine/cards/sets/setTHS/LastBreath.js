"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LastBreathBase = require("../setMMQ/LastBreath.js");

class LastBreath extends LastBreathBase {
  constructor(game) {
    super(game, "Last Breath", "Theros", "THS");
  }
}

module.exports = LastBreath;
