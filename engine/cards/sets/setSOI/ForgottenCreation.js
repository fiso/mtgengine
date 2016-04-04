"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgottenCreation extends UnimplementedCard {
  constructor(game) {
    super(game, "Forgotten Creation", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ForgottenCreation;
