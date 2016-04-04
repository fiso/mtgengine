"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemigodofRevengeBase = require("../setMMA/DemigodofRevenge.js");

class DemigodofRevenge extends DemigodofRevengeBase {
  constructor(game) {
    super(game, "Demigod of Revenge", "Prerelease Events", "pPRE");
  }
}

module.exports = DemigodofRevenge;
