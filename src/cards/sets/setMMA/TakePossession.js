"use strict";
const Constants = require ("../../../Constants");
const TakePossessionBase = require("../setFUT/TakePossession");

class TakePossession extends TakePossessionBase {
  constructor(game) {
    super(game, "Take Possession", "Modern Masters", "MMA");
  }
}

module.exports = TakePossession;
