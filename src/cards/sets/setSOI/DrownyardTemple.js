"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrownyardTemple extends UnimplementedCard {
  constructor(game) {
    super(game, "Drownyard Temple", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DrownyardTemple;
