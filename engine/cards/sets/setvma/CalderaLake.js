"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CalderaLakeBase = require("../setTMP/CalderaLake.js");

class CalderaLake extends CalderaLakeBase {
  constructor(game) {
    super(game, "Caldera Lake", "Vintage Masters", "VMA");
  }
}

module.exports = CalderaLake;
