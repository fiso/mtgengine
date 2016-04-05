"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianasSpecter extends UnimplementedCard {
  constructor(game) {
    super(game, "Liliana's Specter", "Magic 2011", "M11");
  }
}

module.exports = LilianasSpecter;
