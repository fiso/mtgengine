"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GloomwidowBase = require("../setAVR/Gloomwidow.js");

class Gloomwidow extends GloomwidowBase {
  constructor(game) {
    super(game, "Gloomwidow", "Shadowmoor", "SHM");
  }
}

module.exports = Gloomwidow;
