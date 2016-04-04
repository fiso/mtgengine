"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathPitOfferingBase = require("../set8ED/DeathPitOffering.js");

class DeathPitOffering extends DeathPitOfferingBase {
  constructor(game) {
    super(game, "Death Pit Offering", "Nemesis", "NMS");
  }
}

module.exports = DeathPitOffering;
