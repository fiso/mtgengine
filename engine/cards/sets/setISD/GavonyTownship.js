"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GavonyTownship extends UnimplementedCard {
  constructor(game) {
    super(game, "Gavony Township", "Innistrad", "ISD");
  }
}

module.exports = GavonyTownship;
