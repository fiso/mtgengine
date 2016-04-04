"use strict";
const Constants = require ("../../../Constants");
const CourierHawkBase = require("../setCNS/CourierHawk");

class CourierHawk extends CourierHawkBase {
  constructor(game) {
    super(game, "Courier Hawk", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CourierHawk;
