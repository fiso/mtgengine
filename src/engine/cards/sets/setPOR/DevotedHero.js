"use strict";
const Constants = require ("../../../Constants");
const DevotedHeroBase = require("../setS99/DevotedHero");

class DevotedHero extends DevotedHeroBase {
  constructor (game) {
    super(game, "Devoted Hero", "Portal", "POR");
  }
}

module.exports = DevotedHero;
