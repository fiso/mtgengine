"use strict";
const Constants = require ("../../../Constants");
const ScrublandBase = require("../setVMA/Scrubland");

class Scrubland extends ScrublandBase {
  constructor (game) {
    super(game, "Scrubland", "Masters Edition III", "ME3");
  }
}

module.exports = Scrubland;
