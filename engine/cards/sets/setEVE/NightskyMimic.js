"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightskyMimic extends UnimplementedCard {
  constructor(game) {
    super(game, "Nightsky Mimic", "Eventide", "EVE");
  }
}

module.exports = NightskyMimic;
