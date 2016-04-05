"use strict";
const Constants = require ("../../../Constants");
const CalderaLakeBase = require("../setTMP/CalderaLake");

class CalderaLake extends CalderaLakeBase {
  constructor(game) {
    super(game, "Caldera Lake", "Tempest Remastered", "TPR");
  }
}

module.exports = CalderaLake;
