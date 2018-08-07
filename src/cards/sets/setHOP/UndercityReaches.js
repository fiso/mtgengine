"use strict";
const Constants = require ("../../../Constants");
const UndercityReachesBase = require("../setPCA/UndercityReaches");

class UndercityReaches extends UndercityReachesBase {
  constructor (game) {
    super(game, "Undercity Reaches", "Planechase", "HOP");
  }
}

module.exports = UndercityReaches;
