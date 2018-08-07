"use strict";
const Constants = require ("../../../Constants");
const SkyWeaverBase = require("../set10E/SkyWeaver");

class SkyWeaver extends SkyWeaverBase {
  constructor (game) {
    super(game, "Sky Weaver", "Invasion", "INV");
  }
}

module.exports = SkyWeaver;
