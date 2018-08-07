"use strict";
const Constants = require ("../../../Constants");
const MasterofthePearlTridentBase = require("../setDDT/MasterofthePearlTrident");

class MasterofthePearlTrident extends MasterofthePearlTridentBase {
  constructor (game) {
    super(game, "Master of the Pearl Trident", "Magic 2013", "M13");
  }
}

module.exports = MasterofthePearlTrident;
