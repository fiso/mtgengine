"use strict";
const Constants = require ("../../../Constants");
const SunkenRuinsBase = require("../setEXP/SunkenRuins");

class SunkenRuins extends SunkenRuinsBase {
  constructor (game) {
    super(game, "Sunken Ruins", "Shadowmoor", "SHM");
  }
}

module.exports = SunkenRuins;
