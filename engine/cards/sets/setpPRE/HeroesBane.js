"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeroesBaneBase = require("../setJOU/HeroesBane.js");

class HeroesBane extends HeroesBaneBase {
  constructor(game) {
    super(game, "Heroes' Bane", "Prerelease Events", "pPRE");
  }
}

module.exports = HeroesBane;
