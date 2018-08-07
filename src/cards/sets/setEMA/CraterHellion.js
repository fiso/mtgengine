"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CraterHellion extends UnimplementedCard {
  constructor (game) {
    super(game, "Crater Hellion", "Eternal Masters", "EMA");
  }
}

module.exports = CraterHellion;
