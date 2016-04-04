"use strict";
const Constants = require ("../../../Constants");
const SynodCenturionBase = require("../setARC/SynodCenturion");

class SynodCenturion extends SynodCenturionBase {
  constructor(game) {
    super(game, "Synod Centurion", "Fifth Dawn", "5DN");
  }
}

module.exports = SynodCenturion;
