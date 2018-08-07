"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Armor", "Eighth Edition", "8ED");
  }
}

module.exports = UrzasArmor;
