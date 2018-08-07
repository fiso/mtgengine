"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercadianBazaar extends UnimplementedCard {
  constructor (game) {
    super(game, "Mercadian Bazaar", "Mercadian Masques", "MMQ");
  }
}

module.exports = MercadianBazaar;
