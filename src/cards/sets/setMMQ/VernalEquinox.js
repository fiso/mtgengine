"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VernalEquinox extends UnimplementedCard {
  constructor(game) {
    super(game, "Vernal Equinox", "Mercadian Masques", "MMQ");
  }
}

module.exports = VernalEquinox;
