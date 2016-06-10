"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShaleskinBruiser extends UnimplementedCard {
  constructor (game) {
    super(game, "Shaleskin Bruiser", "Onslaught", "ONS");
  }
}

module.exports = ShaleskinBruiser;
