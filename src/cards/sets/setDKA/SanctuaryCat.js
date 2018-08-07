"use strict";
const Constants = require ("../../../Constants");
const SanctuaryCatBase = require("../setMTGA/SanctuaryCat");

class SanctuaryCat extends SanctuaryCatBase {
  constructor (game) {
    super(game, "Sanctuary Cat", "Dark Ascension", "DKA");
  }
}

module.exports = SanctuaryCat;
