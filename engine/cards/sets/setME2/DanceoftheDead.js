"use strict";
const Constants = require ("../../../Constants");
const DanceoftheDeadBase = require("../setICE/DanceoftheDead");

class DanceoftheDead extends DanceoftheDeadBase {
  constructor(game) {
    super(game, "Dance of the Dead", "Masters Edition II", "ME2");
  }
}

module.exports = DanceoftheDead;
