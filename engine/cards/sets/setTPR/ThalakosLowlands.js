"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThalakosLowlandsBase = require("../setBRB/ThalakosLowlands.js");

class ThalakosLowlands extends ThalakosLowlandsBase {
  constructor(game) {
    super(game, "Thalakos Lowlands", "Tempest Remastered", "TPR");
  }
}

module.exports = ThalakosLowlands;
