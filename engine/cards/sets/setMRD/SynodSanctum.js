"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SynodSanctumBase = require("../setARC/SynodSanctum.js");

class SynodSanctum extends SynodSanctumBase {
  constructor(game) {
    super(game, "Synod Sanctum", "Mirrodin", "MRD");
  }
}

module.exports = SynodSanctum;
