"use strict";
const Constants = require ("../../../Constants");
const KhabalGhoulBase = require("../setMED/KhabalGhoul");

class KhabalGhoul extends KhabalGhoulBase {
  constructor (game) {
    super(game, "Khabál Ghoul", "Magic Online Promos", "PRM");
  }
}

module.exports = KhabalGhoul;
