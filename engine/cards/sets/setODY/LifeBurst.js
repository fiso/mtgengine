"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifeBurst extends UnimplementedCard {
  constructor(game) {
    super(game, "Life Burst", "Odyssey", "ODY");
  }
}

module.exports = LifeBurst;
