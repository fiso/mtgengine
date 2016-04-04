"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClawsofWirewoodBase = require("../setSCG/ClawsofWirewood.js");

class ClawsofWirewood extends ClawsofWirewoodBase {
  constructor(game) {
    super(game, "Claws of Wirewood", "Vintage Masters", "VMA");
  }
}

module.exports = ClawsofWirewood;
