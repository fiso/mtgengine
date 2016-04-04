"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptainsClaws extends UnimplementedCard {
  constructor(game) {
    super(game, "Captain's Claws", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CaptainsClaws;
