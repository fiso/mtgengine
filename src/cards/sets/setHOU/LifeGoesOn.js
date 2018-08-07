"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifeGoesOn extends UnimplementedCard {
  constructor (game) {
    super(game, "Life Goes On", "Hour of Devastation", "HOU");
  }
}

module.exports = LifeGoesOn;
