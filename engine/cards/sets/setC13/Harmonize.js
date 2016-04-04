"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HarmonizeBase = require("../setARC/Harmonize.js");

class Harmonize extends HarmonizeBase {
  constructor(game) {
    super(game, "Harmonize", "Commander 2013 Edition", "C13");
  }
}

module.exports = Harmonize;
