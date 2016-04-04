"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvianChangelingBase = require("../setLRW/AvianChangeling.js");

class AvianChangeling extends AvianChangelingBase {
  constructor(game) {
    super(game, "Avian Changeling", "Modern Masters", "MMA");
  }
}

module.exports = AvianChangeling;
