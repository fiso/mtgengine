"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExpelfromOrazca extends UnimplementedCard {
  constructor (game) {
    super(game, "Expel from Orazca", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ExpelfromOrazca;
