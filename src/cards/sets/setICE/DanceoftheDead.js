"use strict";
const Constants = require ("../../../Constants");
const DanceoftheDeadBase = require("../setME2/DanceoftheDead");

class DanceoftheDead extends DanceoftheDeadBase {
  constructor (game) {
    super(game, "Dance of the Dead", "Ice Age", "ICE");
  }
}

module.exports = DanceoftheDead;
