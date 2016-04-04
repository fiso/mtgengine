"use strict";
const Constants = require ("../../../Constants");
const SunkenRuinsBase = require("../setSHM/SunkenRuins");

class SunkenRuins extends SunkenRuinsBase {
  constructor(game) {
    super(game, "Sunken Ruins", "Zendikar Expedition", "EXP");
  }
}

module.exports = SunkenRuins;
