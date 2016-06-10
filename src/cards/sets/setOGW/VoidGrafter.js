"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidGrafter extends UnimplementedCard {
  constructor (game) {
    super(game, "Void Grafter", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = VoidGrafter;
