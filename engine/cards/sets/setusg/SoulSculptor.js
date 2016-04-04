"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulSculptor extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Sculptor", "Urza's Saga", "USG");
  }
}

module.exports = SoulSculptor;
