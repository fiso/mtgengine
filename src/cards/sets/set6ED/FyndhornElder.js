"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FyndhornElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Fyndhorn Elder", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FyndhornElder;
