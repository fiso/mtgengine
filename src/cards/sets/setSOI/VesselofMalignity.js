"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VesselofMalignity extends UnimplementedCard {
  constructor(game) {
    super(game, "Vessel of Malignity", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VesselofMalignity;
