"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordofKaldra extends UnimplementedCard {
  constructor(game) {
    super(game, "Sword of Kaldra", "Mirrodin", "MRD");
  }
}

module.exports = SwordofKaldra;
