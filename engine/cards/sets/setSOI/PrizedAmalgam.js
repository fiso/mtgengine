"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrizedAmalgam extends UnimplementedCard {
  constructor(game) {
    super(game, "Prized Amalgam", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PrizedAmalgam;
