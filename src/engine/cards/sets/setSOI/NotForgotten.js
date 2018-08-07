"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NotForgotten extends UnimplementedCard {
  constructor (game) {
    super(game, "Not Forgotten", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NotForgotten;
