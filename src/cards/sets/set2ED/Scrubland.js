"use strict";
const Constants = require ("../../../Constants");
const ScrublandBase = require("../setCED/Scrubland");

class Scrubland extends ScrublandBase {
  constructor (game) {
    super(game, "Scrubland", "Unlimited Edition", "2ED");
  }
}

module.exports = Scrubland;
