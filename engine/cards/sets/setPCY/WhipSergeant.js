"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhipSergeantBase = require("../set9ED/WhipSergeant.js");

class WhipSergeant extends WhipSergeantBase {
  constructor(game) {
    super(game, "Whip Sergeant", "Prophecy", "PCY");
  }
}

module.exports = WhipSergeant;
