"use strict";
const Constants = require ("../../../Constants");
const NightmareBase = require("../setW17/Nightmare");

class Nightmare extends NightmareBase {
  constructor (game) {
    super(game, "Nightmare", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Nightmare;
