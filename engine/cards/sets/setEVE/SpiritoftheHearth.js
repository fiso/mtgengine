"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritoftheHearth extends Card {
  constructor(game) {
    super(game, "Spirit of the Hearth", "Eventide", "EVE");
  }
}

module.exports = SpiritoftheHearth;
