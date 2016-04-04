"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyshroudRangerBase = require("../setTMP/SkyshroudRanger.js");

class SkyshroudRanger extends SkyshroudRangerBase {
  constructor(game) {
    super(game, "Skyshroud Ranger", "Tenth Edition", "10E");
  }
}

module.exports = SkyshroudRanger;
