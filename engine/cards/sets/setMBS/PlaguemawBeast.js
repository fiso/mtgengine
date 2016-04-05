"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlaguemawBeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Plaguemaw Beast", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PlaguemawBeast;
