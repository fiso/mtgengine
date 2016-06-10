"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Toymaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Toymaker", "Mercadian Masques", "MMQ");
  }
}

module.exports = Toymaker;
