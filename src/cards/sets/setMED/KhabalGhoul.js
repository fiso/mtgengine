"use strict";
const Constants = require ("../../../Constants");
const KhabalGhoulBase = require("../setARN/KhabalGhoul");

class KhabalGhoul extends KhabalGhoulBase {
  constructor (game) {
    super(game, "Khabál Ghoul", "Masters Edition", "MED");
  }
}

module.exports = KhabalGhoul;
