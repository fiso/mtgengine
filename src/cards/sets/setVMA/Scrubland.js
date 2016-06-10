"use strict";
const Constants = require ("../../../Constants");
const ScrublandBase = require("../setCED/Scrubland");

class Scrubland extends ScrublandBase {
  constructor (game) {
    super(game, "Scrubland", "Vintage Masters", "VMA");
  }
}

module.exports = Scrubland;
