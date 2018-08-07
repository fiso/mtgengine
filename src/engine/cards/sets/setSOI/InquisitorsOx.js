"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InquisitorsOx extends UnimplementedCard {
  constructor (game) {
    super(game, "Inquisitor's Ox", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InquisitorsOx;
