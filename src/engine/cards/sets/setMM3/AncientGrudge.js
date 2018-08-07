"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientGrudge extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Grudge", "Modern Masters 2017", "MM3");
  }
}

module.exports = AncientGrudge;
