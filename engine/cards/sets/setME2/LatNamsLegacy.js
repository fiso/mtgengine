"use strict";
const Constants = require ("../../../Constants");
const LatNamsLegacyBase = require("../setALL/LatNamsLegacy");

class LatNamsLegacy extends LatNamsLegacyBase {
  constructor(game) {
    super(game, "Lat-Nam's Legacy", "Masters Edition II", "ME2");
  }
}

module.exports = LatNamsLegacy;
