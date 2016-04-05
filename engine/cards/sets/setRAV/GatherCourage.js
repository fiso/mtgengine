"use strict";
const Constants = require ("../../../Constants");
const GatherCourageBase = require("../setM15/GatherCourage");

class GatherCourage extends GatherCourageBase {
  constructor(game) {
    super(game, "Gather Courage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GatherCourage;
