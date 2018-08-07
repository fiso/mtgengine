"use strict";
const Constants = require ("../../../Constants");
const AbbeyGargoylesBase = require("../setME2/AbbeyGargoyles");

class AbbeyGargoyles extends AbbeyGargoylesBase {
  constructor (game) {
    super(game, "Abbey Gargoyles", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = AbbeyGargoyles;
