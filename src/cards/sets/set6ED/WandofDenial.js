"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WandofDenial extends UnimplementedCard {
  constructor (game) {
    super(game, "Wand of Denial", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WandofDenial;
