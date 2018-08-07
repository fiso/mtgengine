"use strict";
const Constants = require ("../../../Constants");
const GlenElendraLiegeBase = require("../setPCA/GlenElendraLiege");

class GlenElendraLiege extends GlenElendraLiegeBase {
  constructor (game) {
    super(game, "Glen Elendra Liege", "Planechase 2012", "PC2");
  }
}

module.exports = GlenElendraLiege;
