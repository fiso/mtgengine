"use strict";
const Constants = require ("../../../Constants");
const WandofDenialBase = require("../set6ED/WandofDenial");

class WandofDenial extends WandofDenialBase {
  constructor(game) {
    super(game, "Wand of Denial", "Visions", "VIS");
  }
}

module.exports = WandofDenial;
