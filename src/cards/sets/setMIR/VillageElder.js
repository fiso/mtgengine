"use strict";
const Constants = require ("../../../Constants");
const VillageElderBase = require("../setBRB/VillageElder");

class VillageElder extends VillageElderBase {
  constructor(game) {
    super(game, "Village Elder", "Mirage", "MIR");
  }
}

module.exports = VillageElder;
