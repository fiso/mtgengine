"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GatherCourageBase = require("../setM15/GatherCourage.js");

class GatherCourage extends GatherCourageBase {
  constructor(game) {
    super(game, "Gather Courage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GatherCourage;
