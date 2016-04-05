"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OneEyedScarecrow extends UnimplementedCard {
  constructor(game) {
    super(game, "One-Eyed Scarecrow", "Innistrad", "ISD");
  }
}

module.exports = OneEyedScarecrow;
