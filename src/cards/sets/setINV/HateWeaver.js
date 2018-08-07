"use strict";
const Constants = require ("../../../Constants");
const HateWeaverBase = require("../set10E/HateWeaver");

class HateWeaver extends HateWeaverBase {
  constructor (game) {
    super(game, "Hate Weaver", "Invasion", "INV");
  }
}

module.exports = HateWeaver;
