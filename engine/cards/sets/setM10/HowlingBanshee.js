"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HowlingBansheeBase = require("../setDD3_GVL/HowlingBanshee.js");

class HowlingBanshee extends HowlingBansheeBase {
  constructor(game) {
    super(game, "Howling Banshee", "Magic 2010", "M10");
  }
}

module.exports = HowlingBanshee;
