"use strict";
const Constants = require ("../../../Constants");
const HixusPrisonWardenBase = require("../setPORI/HixusPrisonWarden");

class HixusPrisonWarden extends HixusPrisonWardenBase {
  constructor (game) {
    super(game, "Hixus, Prison Warden", "Magic Origins", "ORI");
  }
}

module.exports = HixusPrisonWarden;
