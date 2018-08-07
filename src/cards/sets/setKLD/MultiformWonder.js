"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MultiformWonder extends UnimplementedCard {
  constructor (game) {
    super(game, "Multiform Wonder", "Kaladesh", "KLD");
  }
}

module.exports = MultiformWonder;
