"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PearlMedallionBase = require("../setC14/PearlMedallion.js");

class PearlMedallion extends PearlMedallionBase {
  constructor(game) {
    super(game, "Pearl Medallion", "Tempest", "TMP");
  }
}

module.exports = PearlMedallion;
