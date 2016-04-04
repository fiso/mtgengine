"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AltaroftheBroodBase = require("../setKTK/AltaroftheBrood.js");

class AltaroftheBrood extends AltaroftheBroodBase {
  constructor(game) {
    super(game, "Altar of the Brood", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = AltaroftheBrood;
