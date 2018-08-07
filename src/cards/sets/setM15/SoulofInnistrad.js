"use strict";
const Constants = require ("../../../Constants");
const SoulofInnistradBase = require("../setC18/SoulofInnistrad");

class SoulofInnistrad extends SoulofInnistradBase {
  constructor (game) {
    super(game, "Soul of Innistrad", "Magic 2015", "M15");
  }
}

module.exports = SoulofInnistrad;
