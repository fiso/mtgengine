"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EncampmentKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Encampment Keeper", "Ixalan", "XLN");
  }
}

module.exports = EncampmentKeeper;
