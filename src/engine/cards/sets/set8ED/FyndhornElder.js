"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FyndhornElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Fyndhorn Elder", "Eighth Edition", "8ED");
  }
}

module.exports = FyndhornElder;
