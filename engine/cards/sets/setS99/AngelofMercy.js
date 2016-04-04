"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelofMercyBase = require("../setDD3_DVD/AngelofMercy.js");

class AngelofMercy extends AngelofMercyBase {
  constructor(game) {
    super(game, "Angel of Mercy", "Starter 1999", "S99");
  }
}

module.exports = AngelofMercy;
