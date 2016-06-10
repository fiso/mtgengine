"use strict";
const Constants = require ("../../../Constants");
const NightmareBase = require("../set6ED/Nightmare");

class Nightmare extends NightmareBase {
  constructor (game) {
    super(game, "Nightmare", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Nightmare;
