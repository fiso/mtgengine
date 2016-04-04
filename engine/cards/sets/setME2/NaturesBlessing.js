"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturesBlessingBase = require("../setALL/NaturesBlessing.js");

class NaturesBlessing extends NaturesBlessingBase {
  constructor(game) {
    super(game, "Nature's Blessing", "Masters Edition II", "ME2");
  }
}

module.exports = NaturesBlessing;
