"use strict";
const Constants = require ("../../../Constants");
const VolrathsStrongholdBase = require("../setSTH/VolrathsStronghold");

class VolrathsStronghold extends VolrathsStrongholdBase {
  constructor(game) {
    super(game, "Volrath's Stronghold", "Tempest Remastered", "TPR");
  }
}

module.exports = VolrathsStronghold;
