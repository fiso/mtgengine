"use strict";
const Constants = require ("../../../Constants");
const NaturesBlessingBase = require("../setALL/NaturesBlessing");

class NaturesBlessing extends NaturesBlessingBase {
  constructor(game) {
    super(game, "Nature's Blessing", "Masters Edition II", "ME2");
  }
}

module.exports = NaturesBlessing;
