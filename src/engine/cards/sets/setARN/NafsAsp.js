"use strict";
const Constants = require ("../../../Constants");
const NafsAspBase = require("../set4ED/NafsAsp");

class NafsAsp extends NafsAspBase {
  constructor (game) {
    super(game, "Nafs Asp", "Arabian Nights", "ARN");
  }
}

module.exports = NafsAsp;
