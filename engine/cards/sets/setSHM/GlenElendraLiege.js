"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlenElendraLiegeBase = require("../setPC2/GlenElendraLiege.js");

class GlenElendraLiege extends GlenElendraLiegeBase {
  constructor(game) {
    super(game, "Glen Elendra Liege", "Shadowmoor", "SHM");
  }
}

module.exports = GlenElendraLiege;
