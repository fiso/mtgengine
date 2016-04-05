"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnlyBloodEndsYourNightmares extends UnimplementedCard {
  constructor(game) {
    super(game, "Only Blood Ends Your Nightmares", "Archenemy", "ARC");
  }
}

module.exports = OnlyBloodEndsYourNightmares;
