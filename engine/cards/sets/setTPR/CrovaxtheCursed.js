"use strict";
const Constants = require ("../../../Constants");
const CrovaxtheCursedBase = require("../setSTH/CrovaxtheCursed");

class CrovaxtheCursed extends CrovaxtheCursedBase {
  constructor(game) {
    super(game, "Crovax the Cursed", "Tempest Remastered", "TPR");
  }
}

module.exports = CrovaxtheCursed;
