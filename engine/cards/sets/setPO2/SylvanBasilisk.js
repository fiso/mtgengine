"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SylvanBasilisk extends Card {
  constructor(game) {
    super(game, "Sylvan Basilisk", "Portal Second Age", "PO2");
  }
}

module.exports = SylvanBasilisk;
