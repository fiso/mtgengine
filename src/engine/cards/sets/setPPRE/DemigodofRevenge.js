"use strict";
const Constants = require ("../../../Constants");
const DemigodofRevengeBase = require("../setMMA/DemigodofRevenge");

class DemigodofRevenge extends DemigodofRevengeBase {
  constructor (game) {
    super(game, "Demigod of Revenge", "Prerelease Events", "PPRE");
  }
}

module.exports = DemigodofRevenge;
