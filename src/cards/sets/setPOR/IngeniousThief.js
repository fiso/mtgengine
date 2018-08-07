"use strict";
const Constants = require ("../../../Constants");
const IngeniousThiefBase = require("../setS99/IngeniousThief");

class IngeniousThief extends IngeniousThiefBase {
  constructor (game) {
    super(game, "Ingenious Thief", "Portal", "POR");
  }
}

module.exports = IngeniousThief;
