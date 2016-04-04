"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritoftheHearth extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit of the Hearth", "Eventide", "EVE");
  }
}

module.exports = SpiritoftheHearth;
