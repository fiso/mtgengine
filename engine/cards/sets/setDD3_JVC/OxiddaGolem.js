"use strict";
const Constants = require ("../../../Constants");
const OxiddaGolemBase = require("../setDST/OxiddaGolem");

class OxiddaGolem extends OxiddaGolemBase {
  constructor(game) {
    super(game, "Oxidda Golem", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = OxiddaGolem;
