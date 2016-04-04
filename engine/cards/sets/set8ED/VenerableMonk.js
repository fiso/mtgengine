"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VenerableMonkBase = require("../set6ED/VenerableMonk.js");

class VenerableMonk extends VenerableMonkBase {
  constructor(game) {
    super(game, "Venerable Monk", "Eighth Edition", "8ED");
  }
}

module.exports = VenerableMonk;
