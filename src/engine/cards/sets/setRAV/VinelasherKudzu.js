"use strict";
const Constants = require ("../../../Constants");
const VinelasherKudzuBase = require("../setDDM/VinelasherKudzu");

class VinelasherKudzu extends VinelasherKudzuBase {
  constructor (game) {
    super(game, "Vinelasher Kudzu", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VinelasherKudzu;
