"use strict";
const Constants = require ("../../../Constants");
const GloomwidowBase = require("../setAVR/Gloomwidow");

class Gloomwidow extends GloomwidowBase {
  constructor(game) {
    super(game, "Gloomwidow", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Gloomwidow;
