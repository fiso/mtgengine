"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WithoutWeakness extends UnimplementedCard {
  constructor (game) {
    super(game, "Without Weakness", "Hour of Devastation", "HOU");
  }
}

module.exports = WithoutWeakness;
