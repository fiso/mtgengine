"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgottenAncient extends UnimplementedCard {
  constructor(game) {
    super(game, "Forgotten Ancient", "Archenemy", "ARC");
  }
}

module.exports = ForgottenAncient;
