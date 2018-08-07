"use strict";
const Constants = require ("../../../Constants");
const RubblebeltRaidersBase = require("../setDDS/RubblebeltRaiders");

class RubblebeltRaiders extends RubblebeltRaidersBase {
  constructor (game) {
    super(game, "Rubblebelt Raiders", "Gatecrash", "GTC");
  }
}

module.exports = RubblebeltRaiders;
