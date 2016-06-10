"use strict";
const Constants = require ("../../../Constants");
const DevotedHeroBase = require("../setPOR/DevotedHero");

class DevotedHero extends DevotedHeroBase {
  constructor (game) {
    super(game, "Devoted Hero", "Starter 1999", "S99");
  }
}

module.exports = DevotedHero;
