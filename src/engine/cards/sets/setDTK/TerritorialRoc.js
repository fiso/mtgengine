"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerritorialRoc extends UnimplementedCard {
  constructor (game) {
    super(game, "Territorial Roc", "Dragons of Tarkir", "DTK");
  }
}

module.exports = TerritorialRoc;
