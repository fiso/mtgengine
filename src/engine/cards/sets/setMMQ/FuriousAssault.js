"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuriousAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Furious Assault", "Mercadian Masques", "MMQ");
  }
}

module.exports = FuriousAssault;
