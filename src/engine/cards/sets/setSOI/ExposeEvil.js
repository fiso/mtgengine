"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExposeEvil extends UnimplementedCard {
  constructor (game) {
    super(game, "Expose Evil", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ExposeEvil;
