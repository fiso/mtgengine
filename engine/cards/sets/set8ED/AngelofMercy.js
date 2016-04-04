"use strict";
const Constants = require ("../../../Constants");
const AngelofMercyBase = require("../setDD3_DVD/AngelofMercy");

class AngelofMercy extends AngelofMercyBase {
  constructor(game) {
    super(game, "Angel of Mercy", "Eighth Edition", "8ED");
  }
}

module.exports = AngelofMercy;
