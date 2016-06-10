"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasBauble extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Bauble", "Fifth Edition", "5ED");
  }
}

module.exports = UrzasBauble;
