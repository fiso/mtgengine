"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroesPodium extends UnimplementedCard {
  constructor(game) {
    super(game, "Heroes' Podium", "Born of the Gods", "BNG");
  }
}

module.exports = HeroesPodium;
