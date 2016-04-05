"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirefiendElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Firefiend Elemental", "Magic Origins", "ORI");
  }
}

module.exports = FirefiendElemental;
