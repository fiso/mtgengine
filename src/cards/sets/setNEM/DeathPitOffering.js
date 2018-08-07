"use strict";
const Constants = require ("../../../Constants");
const DeathPitOfferingBase = require("../set8ED/DeathPitOffering");

class DeathPitOffering extends DeathPitOfferingBase {
  constructor (game) {
    super(game, "Death Pit Offering", "Nemesis", "NEM");
  }
}

module.exports = DeathPitOffering;
