"use strict";
const Constants = require ("../../../Constants");
const IcyPrisonBase = require("../setICE/IcyPrison");

class IcyPrison extends IcyPrisonBase {
  constructor (game) {
    super(game, "Icy Prison", "Masters Edition II", "ME2");
  }
}

module.exports = IcyPrison;
