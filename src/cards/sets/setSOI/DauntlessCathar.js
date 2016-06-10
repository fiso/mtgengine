"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauntlessCathar extends UnimplementedCard {
  constructor (game) {
    super(game, "Dauntless Cathar", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DauntlessCathar;
