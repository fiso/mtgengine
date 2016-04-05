"use strict";
const Constants = require ("../../../Constants");
const JetMedallionBase = require("../setC14/JetMedallion");

class JetMedallion extends JetMedallionBase {
  constructor(game) {
    super(game, "Jet Medallion", "Tempest", "TMP");
  }
}

module.exports = JetMedallion;
