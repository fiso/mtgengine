"use strict";
const Constants = require ("../../../Constants");
const NightmareBase = require("../set6ED/Nightmare");

class Nightmare extends NightmareBase {
  constructor(game) {
    super(game, "Nightmare", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Nightmare;
