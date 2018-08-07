"use strict";
const Constants = require ("../../../Constants");
const AvianChangelingBase = require("../setMMA/AvianChangeling");

class AvianChangeling extends AvianChangelingBase {
  constructor (game) {
    super(game, "Avian Changeling", "Lorwyn", "LRW");
  }
}

module.exports = AvianChangeling;
