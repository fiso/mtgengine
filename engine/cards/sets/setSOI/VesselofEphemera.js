"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VesselofEphemera extends Card {
  constructor(game) {
    super(game, "Vessel of Ephemera", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VesselofEphemera;
