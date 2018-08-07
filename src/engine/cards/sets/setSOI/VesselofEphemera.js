"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VesselofEphemera extends UnimplementedCard {
  constructor (game) {
    super(game, "Vessel of Ephemera", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VesselofEphemera;
