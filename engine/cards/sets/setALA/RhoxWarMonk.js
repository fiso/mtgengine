"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RhoxWarMonkBase = require("../setpFNM/RhoxWarMonk.js");

class RhoxWarMonk extends RhoxWarMonkBase {
  constructor(game) {
    super(game, "Rhox War Monk", "Shards of Alara", "ALA");
  }
}

module.exports = RhoxWarMonk;
