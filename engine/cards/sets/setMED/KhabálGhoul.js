"use strict";
const Constants = require ("../../../Constants");
const KhabálGhoulBase = require("../setARN/KhabálGhoul");

class KhabálGhoul extends KhabálGhoulBase {
  constructor(game) {
    super(game, "Khabál Ghoul", "Masters Edition", "MED");
  }
}

module.exports = KhabálGhoul;
