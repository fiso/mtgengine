"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VenerableMonkBase = require("../set6ED/VenerableMonk.js");

class VenerableMonk extends VenerableMonkBase {
  constructor(game) {
    super(game, "Venerable Monk", "Portal", "POR");
  }
}

module.exports = VenerableMonk;
