"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VillageElderBase = require("../setBRB/VillageElder.js");

class VillageElder extends VillageElderBase {
  constructor(game) {
    super(game, "Village Elder", "Mirage", "MIR");
  }
}

module.exports = VillageElder;
