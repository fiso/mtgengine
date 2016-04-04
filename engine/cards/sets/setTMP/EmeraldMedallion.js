"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmeraldMedallionBase = require("../setC14/EmeraldMedallion.js");

class EmeraldMedallion extends EmeraldMedallionBase {
  constructor(game) {
    super(game, "Emerald Medallion", "Tempest", "TMP");
  }
}

module.exports = EmeraldMedallion;
