"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherSting extends UnimplementedCard {
  constructor(game) {
    super(game, "Æther Sting", "Urza's Destiny", "UDS");
  }
}

module.exports = AetherSting;
