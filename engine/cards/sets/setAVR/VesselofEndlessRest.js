"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VesselofEndlessRest extends UnimplementedCard {
  constructor(game) {
    super(game, "Vessel of Endless Rest", "Avacyn Restored", "AVR");
  }
}

module.exports = VesselofEndlessRest;
