"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IndependentTroops extends UnimplementedCard {
  constructor (game) {
    super(game, "Independent Troops", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = IndependentTroops;
