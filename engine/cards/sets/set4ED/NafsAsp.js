"use strict";
const Constants = require ("../../../Constants");
const NafsAspBase = require("../setARN/NafsAsp");

class NafsAsp extends NafsAspBase {
  constructor(game) {
    super(game, "Nafs Asp", "Fourth Edition", "4ED");
  }
}

module.exports = NafsAsp;
