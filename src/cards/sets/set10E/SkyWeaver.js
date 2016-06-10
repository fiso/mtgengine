"use strict";
const Constants = require ("../../../Constants");
const SkyWeaverBase = require("../setINV/SkyWeaver");

class SkyWeaver extends SkyWeaverBase {
  constructor (game) {
    super(game, "Sky Weaver", "Tenth Edition", "10E");
  }
}

module.exports = SkyWeaver;
