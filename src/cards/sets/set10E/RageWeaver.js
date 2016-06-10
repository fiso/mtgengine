"use strict";
const Constants = require ("../../../Constants");
const RageWeaverBase = require("../setINV/RageWeaver");

class RageWeaver extends RageWeaverBase {
  constructor (game) {
    super(game, "Rage Weaver", "Tenth Edition", "10E");
  }
}

module.exports = RageWeaver;
