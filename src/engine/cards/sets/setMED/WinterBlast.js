"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WinterBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Winter Blast", "Masters Edition", "MED");
  }
}

module.exports = WinterBlast;
