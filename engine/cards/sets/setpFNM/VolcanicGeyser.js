"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolcanicGeyserBase = require("../set6ED/VolcanicGeyser.js");

class VolcanicGeyser extends VolcanicGeyserBase {
  constructor(game) {
    super(game, "Volcanic Geyser", "Friday Night Magic", "pFNM");
  }
}

module.exports = VolcanicGeyser;
