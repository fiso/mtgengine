"use strict";
const Constants = require ("../../../Constants");
const CrovaxtheCursedBase = require("../setSTH/CrovaxtheCursed");

class CrovaxtheCursed extends CrovaxtheCursedBase {
  constructor(game) {
    super(game, "Crovax the Cursed", "Vintage Masters", "VMA");
  }
}

module.exports = CrovaxtheCursed;
