"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JetMedallionBase = require("../setC14/JetMedallion.js");

class JetMedallion extends JetMedallionBase {
  constructor(game) {
    super(game, "Jet Medallion", "Tempest", "TMP");
  }
}

module.exports = JetMedallion;
