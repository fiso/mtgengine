"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NefariousLich extends UnimplementedCard {
  constructor (game) {
    super(game, "Nefarious Lich", "Odyssey", "ODY");
  }
}

module.exports = NefariousLich;
