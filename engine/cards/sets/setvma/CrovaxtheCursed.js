"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrovaxtheCursedBase = require("../setSTH/CrovaxtheCursed.js");

class CrovaxtheCursed extends CrovaxtheCursedBase {
  constructor(game) {
    super(game, "Crovax the Cursed", "Vintage Masters", "VMA");
  }
}

module.exports = CrovaxtheCursed;
