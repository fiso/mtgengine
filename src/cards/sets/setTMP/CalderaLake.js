"use strict";
const Constants = require ("../../../Constants");
const CalderaLakeBase = require("../setTPR/CalderaLake");

class CalderaLake extends CalderaLakeBase {
  constructor (game) {
    super(game, "Caldera Lake", "Tempest", "TMP");
  }
}

module.exports = CalderaLake;
