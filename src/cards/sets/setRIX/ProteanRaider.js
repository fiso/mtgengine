"use strict";
const Constants = require ("../../../Constants");
const ProteanRaiderBase = require("../setPRIX/ProteanRaider");

class ProteanRaider extends ProteanRaiderBase {
  constructor (game) {
    super(game, "Protean Raider", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ProteanRaider;
