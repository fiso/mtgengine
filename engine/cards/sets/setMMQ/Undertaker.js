"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Undertaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Undertaker", "Mercadian Masques", "MMQ");
  }
}

module.exports = Undertaker;
