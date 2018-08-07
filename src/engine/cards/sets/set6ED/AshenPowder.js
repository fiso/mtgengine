"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshenPowder extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashen Powder", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AshenPowder;
