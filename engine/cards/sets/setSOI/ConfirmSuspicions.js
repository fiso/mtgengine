"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConfirmSuspicions extends Card {
  constructor(game) {
    super(game, "Confirm Suspicions", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ConfirmSuspicions;
