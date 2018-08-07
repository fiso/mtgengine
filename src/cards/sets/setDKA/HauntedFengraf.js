"use strict";
const Constants = require ("../../../Constants");
const HauntedFengrafBase = require("../setC18/HauntedFengraf");

class HauntedFengraf extends HauntedFengrafBase {
  constructor (game) {
    super(game, "Haunted Fengraf", "Dark Ascension", "DKA");
  }
}

module.exports = HauntedFengraf;
