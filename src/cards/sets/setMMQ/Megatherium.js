"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Megatherium extends UnimplementedCard {
  constructor(game) {
    super(game, "Megatherium", "Mercadian Masques", "MMQ");
  }
}

module.exports = Megatherium;
