"use strict";
const Constants = require ("../../../Constants");
const NightmareBase = require("../setW17/Nightmare");

class Nightmare extends NightmareBase {
  constructor (game) {
    super(game, "Nightmare", "Magic 2015", "M15");
  }
}

module.exports = Nightmare;
