"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IBaskinYourSilentAwe extends UnimplementedCard {
  constructor(game) {
    super(game, "I Bask in Your Silent Awe", "Archenemy", "ARC");
  }
}

module.exports = IBaskinYourSilentAwe;
