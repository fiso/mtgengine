"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoltariCrusader extends UnimplementedCard {
  constructor (game) {
    super(game, "Soltari Crusader", "Tempest", "TMP");
  }
}

module.exports = SoltariCrusader;
