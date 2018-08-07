"use strict";
const Constants = require ("../../../Constants");
const ScrublandBase = require("../setVMA/Scrubland");

class Scrubland extends ScrublandBase {
  constructor (game) {
    super(game, "Scrubland", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Scrubland;
