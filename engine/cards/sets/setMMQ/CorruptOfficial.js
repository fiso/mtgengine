"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptOfficial extends UnimplementedCard {
  constructor(game) {
    super(game, "Corrupt Official", "Mercadian Masques", "MMQ");
  }
}

module.exports = CorruptOfficial;
