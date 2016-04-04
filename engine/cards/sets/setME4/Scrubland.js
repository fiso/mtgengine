"use strict";
const Constants = require ("../../../Constants");
const ScrublandBase = require("../setCED/Scrubland");

class Scrubland extends ScrublandBase {
  constructor(game) {
    super(game, "Scrubland", "Masters Edition IV", "ME4");
  }
}

module.exports = Scrubland;
