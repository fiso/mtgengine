"use strict";
const Constants = require ("../../../Constants");
const OxiddaGolemBase = require("../setDST/OxiddaGolem");

class OxiddaGolem extends OxiddaGolemBase {
  constructor(game) {
    super(game, "Oxidda Golem", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = OxiddaGolem;
