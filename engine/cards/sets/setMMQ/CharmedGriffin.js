"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CharmedGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Charmed Griffin", "Mercadian Masques", "MMQ");
  }
}

module.exports = CharmedGriffin;
