"use strict";
const Constants = require ("../../../Constants");
const HeraldofAnafenzaBase = require("../setKTK/HeraldofAnafenza");

class HeraldofAnafenza extends HeraldofAnafenzaBase {
  constructor(game) {
    super(game, "Herald of Anafenza", "Prerelease Events", "pPRE");
  }
}

module.exports = HeraldofAnafenza;
