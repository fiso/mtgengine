"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SadisticGleeBase = require("../setBRB/SadisticGlee.js");

class SadisticGlee extends SadisticGleeBase {
  constructor(game) {
    super(game, "Sadistic Glee", "Tempest", "TMP");
  }
}

module.exports = SadisticGlee;
