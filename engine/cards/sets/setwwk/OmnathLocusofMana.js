"use strict";
const Constants = require ("../../../Constants");
const OmnathLocusofManaBase = require("../setV11/OmnathLocusofMana");

class OmnathLocusofMana extends OmnathLocusofManaBase {
  constructor(game) {
    super(game, "Omnath, Locus of Mana", "Worldwake", "WWK");
  }
}

module.exports = OmnathLocusofMana;
