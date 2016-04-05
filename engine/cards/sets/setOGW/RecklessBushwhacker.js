"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessBushwhacker extends UnimplementedCard {
  constructor(game) {
    super(game, "Reckless Bushwhacker", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RecklessBushwhacker;
