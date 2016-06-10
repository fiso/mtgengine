"use strict";
const Constants = require ("../../../Constants");
const GloomwidowBase = require("../setAVR/Gloomwidow");

class Gloomwidow extends GloomwidowBase {
  constructor (game) {
    super(game, "Gloomwidow", "Shadowmoor", "SHM");
  }
}

module.exports = Gloomwidow;
