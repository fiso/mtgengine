"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WelcometotheFold extends UnimplementedCard {
  constructor(game) {
    super(game, "Welcome to the Fold", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WelcometotheFold;
