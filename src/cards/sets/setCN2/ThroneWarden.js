"use strict";
const Constants = require ("../../../Constants");
const ThroneWardenBase = require("../setPZ2/ThroneWarden");

class ThroneWarden extends ThroneWardenBase {
  constructor (game) {
    super(game, "Throne Warden", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ThroneWarden;
