"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeraldofAnafenzaBase = require("../setKTK/HeraldofAnafenza.js");

class HeraldofAnafenza extends HeraldofAnafenzaBase {
  constructor(game) {
    super(game, "Herald of Anafenza", "Prerelease Events", "pPRE");
  }
}

module.exports = HeraldofAnafenza;
