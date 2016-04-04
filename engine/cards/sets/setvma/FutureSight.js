"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FutureSightBase = require("../setDDM/FutureSight.js");

class FutureSight extends FutureSightBase {
  constructor(game) {
    super(game, "Future Sight", "Vintage Masters", "VMA");
  }
}

module.exports = FutureSight;
