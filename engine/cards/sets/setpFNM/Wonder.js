"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WonderBase = require("../setC13/Wonder.js");

class Wonder extends WonderBase {
  constructor(game) {
    super(game, "Wonder", "Friday Night Magic", "pFNM");
  }
}

module.exports = Wonder;
