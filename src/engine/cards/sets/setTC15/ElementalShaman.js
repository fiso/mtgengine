"use strict";
const Constants = require ("../../../Constants");
const ElementalShamanBase = require("../setTCM2/ElementalShaman");

class ElementalShaman extends ElementalShamanBase {
  constructor (game) {
    super(game, "Elemental Shaman", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = ElementalShaman;
