"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CursedTotem extends UnimplementedCard {
  constructor(game) {
    super(game, "Cursed Totem", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CursedTotem;
