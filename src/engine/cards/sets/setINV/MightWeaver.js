"use strict";
const Constants = require ("../../../Constants");
const MightWeaverBase = require("../set10E/MightWeaver");

class MightWeaver extends MightWeaverBase {
  constructor (game) {
    super(game, "Might Weaver", "Invasion", "INV");
  }
}

module.exports = MightWeaver;
