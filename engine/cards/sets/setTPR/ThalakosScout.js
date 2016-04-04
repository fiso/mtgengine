"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThalakosScoutBase = require("../setEXO/ThalakosScout.js");

class ThalakosScout extends ThalakosScoutBase {
  constructor(game) {
    super(game, "Thalakos Scout", "Tempest Remastered", "TPR");
  }
}

module.exports = ThalakosScout;
