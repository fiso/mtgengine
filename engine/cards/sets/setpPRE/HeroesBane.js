"use strict";
const Constants = require ("../../../Constants");
const HeroesBaneBase = require("../setJOU/HeroesBane");

class HeroesBane extends HeroesBaneBase {
  constructor(game) {
    super(game, "Heroes' Bane", "Prerelease Events", "pPRE");
  }
}

module.exports = HeroesBane;
