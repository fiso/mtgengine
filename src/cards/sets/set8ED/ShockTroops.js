"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShockTroops extends UnimplementedCard {
  constructor(game) {
    super(game, "Shock Troops", "Eighth Edition", "8ED");
  }
}

module.exports = ShockTroops;
