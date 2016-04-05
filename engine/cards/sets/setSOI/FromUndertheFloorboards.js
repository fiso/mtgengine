"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FromUndertheFloorboards extends UnimplementedCard {
  constructor(game) {
    super(game, "From Under the Floorboards", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FromUndertheFloorboards;
