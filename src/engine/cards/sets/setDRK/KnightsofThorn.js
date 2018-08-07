"use strict";
const Constants = require ("../../../Constants");
const KnightsofThornBase = require("../setMED/KnightsofThorn");

class KnightsofThorn extends KnightsofThornBase {
  constructor (game) {
    super(game, "Knights of Thorn", "The Dark", "DRK");
  }
}

module.exports = KnightsofThorn;
