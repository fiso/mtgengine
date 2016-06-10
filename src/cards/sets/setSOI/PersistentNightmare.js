"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PersistentNightmare extends UnimplementedCard {
  constructor (game) {
    super(game, "Persistent Nightmare", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PersistentNightmare;
