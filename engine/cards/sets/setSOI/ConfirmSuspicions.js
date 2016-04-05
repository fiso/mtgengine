"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConfirmSuspicions extends UnimplementedCard {
  constructor(game) {
    super(game, "Confirm Suspicions", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ConfirmSuspicions;
