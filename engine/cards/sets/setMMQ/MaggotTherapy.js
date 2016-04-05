"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaggotTherapy extends UnimplementedCard {
  constructor(game) {
    super(game, "Maggot Therapy", "Mercadian Masques", "MMQ");
  }
}

module.exports = MaggotTherapy;
