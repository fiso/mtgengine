"use strict";
const Constants = require ("../../../Constants");
const HauntedFengrafBase = require("../setC18/HauntedFengraf");

class HauntedFengraf extends HauntedFengrafBase {
  constructor (game) {
    super(game, "Haunted Fengraf", "Masters 25", "A25");
  }
}

module.exports = HauntedFengraf;
