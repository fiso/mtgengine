"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaSeverance extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Severance", "Tempest", "TMP");
  }
}

module.exports = ManaSeverance;
