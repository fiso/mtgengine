"use strict";
const Constants = require ("../../../Constants");
const NaturesBlessingBase = require("../setME2/NaturesBlessing");

class NaturesBlessing extends NaturesBlessingBase {
  constructor (game) {
    super(game, "Nature's Blessing", "Alliances", "ALL");
  }
}

module.exports = NaturesBlessing;
