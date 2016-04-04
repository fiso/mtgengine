"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagicalHackBase = require("../setCED/MagicalHack.js");

class MagicalHack extends MagicalHackBase {
  constructor(game) {
    super(game, "Magical Hack", "International Collector's Edition", "CEI");
  }
}

module.exports = MagicalHack;
