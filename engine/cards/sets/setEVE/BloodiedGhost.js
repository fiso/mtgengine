"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodiedGhost extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodied Ghost", "Eventide", "EVE");
  }
}

module.exports = BloodiedGhost;
