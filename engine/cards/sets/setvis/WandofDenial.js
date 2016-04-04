"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WandofDenialBase = require("../set6ED/WandofDenial.js");

class WandofDenial extends WandofDenialBase {
  constructor(game) {
    super(game, "Wand of Denial", "Visions", "VIS");
  }
}

module.exports = WandofDenial;
