"use strict";
const Constants = require ("../../../Constants");
const SunforgerBase = require("../setC16/Sunforger");

class Sunforger extends SunforgerBase {
  constructor (game) {
    super(game, "Sunforger", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Sunforger;
