"use strict";
const Constants = require ("../../../Constants");
const RageWeaverBase = require("../set10E/RageWeaver");

class RageWeaver extends RageWeaverBase {
  constructor (game) {
    super(game, "Rage Weaver", "Invasion", "INV");
  }
}

module.exports = RageWeaver;
