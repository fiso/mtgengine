"use strict";
const Constants = require ("../../../Constants");
const DovinBaanBase = require("../setKLD/DovinBaan");

class DovinBaan extends DovinBaanBase {
  constructor (game) {
    super(game, "Dovin Baan", "Kaladesh Promos", "PKLD");
  }
}

module.exports = DovinBaan;
