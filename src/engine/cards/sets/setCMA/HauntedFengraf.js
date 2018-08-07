"use strict";
const Constants = require ("../../../Constants");
const HauntedFengrafBase = require("../setC18/HauntedFengraf");

class HauntedFengraf extends HauntedFengrafBase {
  constructor (game) {
    super(game, "Haunted Fengraf", "Commander Anthology", "CMA");
  }
}

module.exports = HauntedFengraf;
