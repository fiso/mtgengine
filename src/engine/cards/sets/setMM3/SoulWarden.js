"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Warden", "Modern Masters 2017", "MM3");
  }
}

module.exports = SoulWarden;
