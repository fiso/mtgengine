"use strict";
const Constants = require ("../../../Constants");
const UntamedHungerBase = require("../setW17/UntamedHunger");

class UntamedHunger extends UntamedHungerBase {
  constructor (game) {
    super(game, "Untamed Hunger", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = UntamedHunger;
