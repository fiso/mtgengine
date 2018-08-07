"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranBodyguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Veteran Bodyguard", "Masters Edition IV", "ME4");
  }
}

module.exports = VeteranBodyguard;
