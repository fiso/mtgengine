"use strict";
const Constants = require ("../../../Constants");
const ScrublandBase = require("../setCED/Scrubland");

class Scrubland extends ScrublandBase {
  constructor (game) {
    super(game, "Scrubland", "Limited Edition Beta", "LEB");
  }
}

module.exports = Scrubland;
