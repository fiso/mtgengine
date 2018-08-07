"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecurityDetail extends UnimplementedCard {
  constructor (game) {
    super(game, "Security Detail", "Mercadian Masques", "MMQ");
  }
}

module.exports = SecurityDetail;
