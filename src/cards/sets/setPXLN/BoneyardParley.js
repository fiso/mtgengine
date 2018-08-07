"use strict";
const Constants = require ("../../../Constants");
const BoneyardParleyBase = require("../setXLN/BoneyardParley");

class BoneyardParley extends BoneyardParleyBase {
  constructor (game) {
    super(game, "Boneyard Parley", "Ixalan Promos", "PXLN");
  }
}

module.exports = BoneyardParley;
