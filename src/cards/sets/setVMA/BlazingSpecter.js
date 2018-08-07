"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazingSpecter extends UnimplementedCard {
  constructor (game) {
    super(game, "Blazing Specter", "Vintage Masters", "VMA");
  }
}

module.exports = BlazingSpecter;
