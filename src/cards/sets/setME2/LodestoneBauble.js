"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LodestoneBauble extends UnimplementedCard {
  constructor (game) {
    super(game, "Lodestone Bauble", "Masters Edition II", "ME2");
  }
}

module.exports = LodestoneBauble;
