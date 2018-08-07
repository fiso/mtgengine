"use strict";
const Constants = require ("../../../Constants");
const LatNamsLegacyBase = require("../setME2/LatNamsLegacy");

class LatNamsLegacy extends LatNamsLegacyBase {
  constructor (game) {
    super(game, "Lat-Nam's Legacy", "Alliances", "ALL");
  }
}

module.exports = LatNamsLegacy;
