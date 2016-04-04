"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wishmonger extends UnimplementedCard {
  constructor(game) {
    super(game, "Wishmonger", "Mercadian Masques", "MMQ");
  }
}

module.exports = Wishmonger;
