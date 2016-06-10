"use strict";
const Constants = require ("../../../Constants");
const GlenElendraLiegeBase = require("../setPC2/GlenElendraLiege");

class GlenElendraLiege extends GlenElendraLiegeBase {
  constructor (game) {
    super(game, "Glen Elendra Liege", "Shadowmoor", "SHM");
  }
}

module.exports = GlenElendraLiege;
