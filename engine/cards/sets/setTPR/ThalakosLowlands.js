"use strict";
const Constants = require ("../../../Constants");
const ThalakosLowlandsBase = require("../setBRB/ThalakosLowlands");

class ThalakosLowlands extends ThalakosLowlandsBase {
  constructor(game) {
    super(game, "Thalakos Lowlands", "Tempest Remastered", "TPR");
  }
}

module.exports = ThalakosLowlands;
