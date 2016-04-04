"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TotheSlaughter extends UnimplementedCard {
  constructor(game) {
    super(game, "To the Slaughter", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TotheSlaughter;
