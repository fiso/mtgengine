"use strict";
const Constants = require ("../../../Constants");
const NightmareBase = require("../setW17/Nightmare");

class Nightmare extends NightmareBase {
  constructor (game) {
    super(game, "Nightmare", "Magic 2010", "M10");
  }
}

module.exports = Nightmare;
