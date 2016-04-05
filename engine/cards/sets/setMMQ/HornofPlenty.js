"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornofPlenty extends UnimplementedCard {
  constructor(game) {
    super(game, "Horn of Plenty", "Mercadian Masques", "MMQ");
  }
}

module.exports = HornofPlenty;
