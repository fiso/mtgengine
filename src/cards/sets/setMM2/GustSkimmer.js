"use strict";
const Constants = require ("../../../Constants");
const GustSkimmerBase = require("../setMBS/GustSkimmer");

class GustSkimmer extends GustSkimmerBase {
  constructor (game) {
    super(game, "Gust-Skimmer", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GustSkimmer;
