"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoltariPriestBase = require("../setpFNM/SoltariPriest.js");

class SoltariPriest extends SoltariPriestBase {
  constructor(game) {
    super(game, "Soltari Priest", "Tempest", "TMP");
  }
}

module.exports = SoltariPriest;
