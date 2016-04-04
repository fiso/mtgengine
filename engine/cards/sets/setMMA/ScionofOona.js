"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScionofOonaBase = require("../setLRW/ScionofOona.js");

class ScionofOona extends ScionofOonaBase {
  constructor(game) {
    super(game, "Scion of Oona", "Modern Masters", "MMA");
  }
}

module.exports = ScionofOona;
