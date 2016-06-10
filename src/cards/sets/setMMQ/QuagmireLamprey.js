"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuagmireLamprey extends UnimplementedCard {
  constructor (game) {
    super(game, "Quagmire Lamprey", "Mercadian Masques", "MMQ");
  }
}

module.exports = QuagmireLamprey;
