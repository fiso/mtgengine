"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SheerDrop extends UnimplementedCard {
  constructor (game) {
    super(game, "Sheer Drop", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SheerDrop;
