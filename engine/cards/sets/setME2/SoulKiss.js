"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulKissBase = require("../setICE/SoulKiss.js");

class SoulKiss extends SoulKissBase {
  constructor(game) {
    super(game, "Soul Kiss", "Masters Edition II", "ME2");
  }
}

module.exports = SoulKiss;
