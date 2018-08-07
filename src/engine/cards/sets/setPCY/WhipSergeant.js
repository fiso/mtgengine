"use strict";
const Constants = require ("../../../Constants");
const WhipSergeantBase = require("../set9ED/WhipSergeant");

class WhipSergeant extends WhipSergeantBase {
  constructor (game) {
    super(game, "Whip Sergeant", "Prophecy", "PCY");
  }
}

module.exports = WhipSergeant;
