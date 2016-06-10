"use strict";
const Constants = require ("../../../Constants");
const AvianChangelingBase = require("../setLRW/AvianChangeling");

class AvianChangeling extends AvianChangelingBase {
  constructor (game) {
    super(game, "Avian Changeling", "Modern Masters", "MMA");
  }
}

module.exports = AvianChangeling;
