"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaveIn extends UnimplementedCard {
  constructor(game) {
    super(game, "Cave-In", "Mercadian Masques", "MMQ");
  }
}

module.exports = CaveIn;
