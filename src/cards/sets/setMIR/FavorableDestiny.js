"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FavorableDestiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Favorable Destiny", "Mirage", "MIR");
  }
}

module.exports = FavorableDestiny;
