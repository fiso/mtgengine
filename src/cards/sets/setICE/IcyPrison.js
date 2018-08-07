"use strict";
const Constants = require ("../../../Constants");
const IcyPrisonBase = require("../setME2/IcyPrison");

class IcyPrison extends IcyPrisonBase {
  constructor (game) {
    super(game, "Icy Prison", "Ice Age", "ICE");
  }
}

module.exports = IcyPrison;
