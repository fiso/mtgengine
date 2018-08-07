"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaplainsBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaplain's Blessing", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ChaplainsBlessing;
