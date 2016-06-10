"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalshanBeguiler extends UnimplementedCard {
  constructor (game) {
    super(game, "Balshan Beguiler", "Odyssey", "ODY");
  }
}

module.exports = BalshanBeguiler;
