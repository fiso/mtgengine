"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulSalvage extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Salvage", "Dominaria", "DOM");
  }
}

module.exports = SoulSalvage;
