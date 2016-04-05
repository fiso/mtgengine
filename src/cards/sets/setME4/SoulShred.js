"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulShred extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Shred", "Masters Edition IV", "ME4");
  }
}

module.exports = SoulShred;
