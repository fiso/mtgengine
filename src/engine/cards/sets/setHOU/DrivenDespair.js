"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrivenDespair extends UnimplementedCard {
  constructor (game) {
    super(game, "Driven // Despair", "Hour of Devastation", "HOU");
  }
}

module.exports = DrivenDespair;
