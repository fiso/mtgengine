"use strict";
const Constants = require ("../../../Constants");
const ShrewdHatchlingBase = require("../setDDJ/ShrewdHatchling");

class ShrewdHatchling extends ShrewdHatchlingBase {
  constructor (game) {
    super(game, "Shrewd Hatchling", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ShrewdHatchling;
