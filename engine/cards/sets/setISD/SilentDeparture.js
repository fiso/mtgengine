"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentDeparture extends UnimplementedCard {
  constructor(game) {
    super(game, "Silent Departure", "Innistrad", "ISD");
  }
}

module.exports = SilentDeparture;
