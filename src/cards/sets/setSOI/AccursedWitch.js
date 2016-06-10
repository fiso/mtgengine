"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AccursedWitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Accursed Witch", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AccursedWitch;
