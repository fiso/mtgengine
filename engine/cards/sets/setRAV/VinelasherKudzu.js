"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VinelasherKudzuBase = require("../setDDM/VinelasherKudzu.js");

class VinelasherKudzu extends VinelasherKudzuBase {
  constructor(game) {
    super(game, "Vinelasher Kudzu", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VinelasherKudzu;
