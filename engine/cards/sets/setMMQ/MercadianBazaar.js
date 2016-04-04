"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MercadianBazaar extends Card {
  constructor(game) {
    super(game, "Mercadian Bazaar", "Mercadian Masques", "MMQ");
  }
}

module.exports = MercadianBazaar;
