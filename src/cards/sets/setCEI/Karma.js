"use strict";
const Constants = require ("../../../Constants");
const KarmaBase = require("../setCED/Karma");

class Karma extends KarmaBase {
  constructor (game) {
    super(game, "Karma", "International Collector's Edition", "CEI");
  }
}

module.exports = Karma;
