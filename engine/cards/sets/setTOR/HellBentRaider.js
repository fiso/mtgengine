"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellBentRaider extends UnimplementedCard {
  constructor(game) {
    super(game, "Hell-Bent Raider", "Torment", "TOR");
  }
}

module.exports = HellBentRaider;
