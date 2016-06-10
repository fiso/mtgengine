"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LodestoneBauble extends UnimplementedCard {
  constructor (game) {
    super(game, "Lodestone Bauble", "Alliances", "ALL");
  }
}

module.exports = LodestoneBauble;
