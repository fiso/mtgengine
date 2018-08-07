"use strict";
const Constants = require ("../../../Constants");
const TotallyLostBase = require("../setM19/TotallyLost");

class TotallyLost extends TotallyLostBase {
  constructor (game) {
    super(game, "Totally Lost", "Battlebond", "BBD");
  }
}

module.exports = TotallyLost;
