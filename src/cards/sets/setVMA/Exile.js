"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Exile extends UnimplementedCard {
  constructor (game) {
    super(game, "Exile", "Vintage Masters", "VMA");
  }
}

module.exports = Exile;
