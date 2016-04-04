"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OmnathLocusofManaBase = require("../setV11/OmnathLocusofMana.js");

class OmnathLocusofMana extends OmnathLocusofManaBase {
  constructor(game) {
    super(game, "Omnath, Locus of Mana", "Worldwake", "WWK");
  }
}

module.exports = OmnathLocusofMana;
