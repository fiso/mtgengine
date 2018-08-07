"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Embolden extends UnimplementedCard {
  constructor (game) {
    super(game, "Embolden", "Odyssey", "ODY");
  }
}

module.exports = Embolden;
