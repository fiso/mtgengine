"use strict";
const Constants = require ("../../../Constants");
const CrovaxtheCursedBase = require("../setTPR/CrovaxtheCursed");

class CrovaxtheCursed extends CrovaxtheCursedBase {
  constructor (game) {
    super(game, "Crovax the Cursed", "Stronghold", "STH");
  }
}

module.exports = CrovaxtheCursed;
