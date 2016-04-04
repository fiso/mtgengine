"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PortTown extends UnimplementedCard {
  constructor(game) {
    super(game, "Port Town", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PortTown;
