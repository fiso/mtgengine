"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasBauble extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Bauble", "Masters Edition", "MED");
  }
}

module.exports = UrzasBauble;
