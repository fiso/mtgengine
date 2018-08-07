"use strict";
const Constants = require ("../../../Constants");
const FarWanderingsBase = require("../setC18/FarWanderings");

class FarWanderings extends FarWanderingsBase {
  constructor (game) {
    super(game, "Far Wanderings", "Torment", "TOR");
  }
}

module.exports = FarWanderings;
