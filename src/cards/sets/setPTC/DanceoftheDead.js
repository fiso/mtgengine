"use strict";
const Constants = require ("../../../Constants");
const DanceoftheDeadBase = require("../setME2/DanceoftheDead");

class DanceoftheDead extends DanceoftheDeadBase {
  constructor (game) {
    super(game, "Dance of the Dead", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = DanceoftheDead;
