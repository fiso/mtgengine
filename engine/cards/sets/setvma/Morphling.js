"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MorphlingBase = require("../setpJGP/Morphling.js");

class Morphling extends MorphlingBase {
  constructor(game) {
    super(game, "Morphling", "Vintage Masters", "VMA");
  }
}

module.exports = Morphling;
