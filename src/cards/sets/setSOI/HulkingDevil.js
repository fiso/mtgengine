"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HulkingDevil extends UnimplementedCard {
  constructor (game) {
    super(game, "Hulking Devil", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HulkingDevil;
